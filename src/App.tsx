import React, { memo, Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from '@/components/app-header/app-header'
import AppFooter from '@/components/app-footer/app-footer'
import AppPlayerBar from '@/views/player/app-player-bar/app-player-bar'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'

const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(441491828))
  }, [])

  return (
    <div className="app">
      <AppHeader />

      <Suspense fallback={''}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <AppFooter />

      {/* 播放器工具栏 */}
      <AppPlayerBar />
    </div>
  )
}

export default memo(App)
