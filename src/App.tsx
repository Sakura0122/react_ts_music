import React, { memo, Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from '@/router'

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <Link to={'/discover'}>发现音乐</Link>
        <Link to={'/my'}>我的音乐</Link>
        <Link to={'/friend'}>关注</Link>
        <Link to={'/download'}>下载客户端</Link>
      </div>
      <Suspense fallback={''}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
