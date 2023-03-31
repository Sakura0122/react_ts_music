import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover/discover'))
const My = lazy(() => import('@/views/my/my'))
const Download = lazy(() => import('@/views/download/download'))
const Friend = lazy(() => import('@/views/friend/friend'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={'/discover'} /> },
  { path: '/discover', element: <Discover /> },
  { path: '/my', element: <My /> },
  { path: '/download', element: <Download /> },
  { path: '/friend', element: <Friend /> }
]

export default routes
