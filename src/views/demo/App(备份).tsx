import React, { memo, Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useAppDispatch, useAppSelector, shallowEqualApp } from '@/store'
import { changeMessageAction } from '@/store/modules/counter'

const App = () => {
  // const { count, message } = useSelector(
  //   (state: IRootState) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   }),
  //   shallowEqual
  // )
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()

  function handleChangeMessage() {
    dispatch(changeMessageAction('哈哈哈哈哈'))
  }

  return (
    <div className="app">
      <div className="nav">
        <Link to={'/discover'}>发现音乐</Link>
        <Link to={'/my'}>我的音乐</Link>
        <Link to={'/friend'}>关注</Link>
        <Link to={'/download'}>下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>{message}</h2>
      <button onClick={handleChangeMessage}>修改message</button>
      <Suspense fallback={''}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
