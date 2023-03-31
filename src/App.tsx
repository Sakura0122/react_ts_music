import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

const App = () => {
  return (
    <div className="app">
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default memo(App)
