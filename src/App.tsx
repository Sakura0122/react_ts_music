import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from '@/components/app-header/app-header'
import AppFooter from '@/components/app-footer/app-footer'

const App = () => {
  return (
    <div className="app">
      <AppHeader />

      <Suspense fallback={''}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <AppFooter />
    </div>
  )
}

export default memo(App)
