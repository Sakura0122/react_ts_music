import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import Discover from '@/views/discover/discover'
import My from '@/views/my/my'
import Download from '@/views/download/download'
import Friend from '@/views/friend/friend'

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={'/discover'} /> },
  { path: '/discover', element: <Discover /> },
  { path: '/my', element: <My /> },
  { path: '/download', element: <Download /> },
  { path: '/friend', element: <Friend /> }
]

export default routes
