import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover/discover'))
const My = lazy(() => import('@/views/my/my'))
const Download = lazy(() => import('@/views/download/download'))
const Friend = lazy(() => import('@/views/friend/friend'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend/recommend'))
const Toplist = lazy(() => import('@/views/discover/c-views/toplist/toplist'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist/playlist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album/album'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={'/discover'} /> },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to={'/discover/recommend'} /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/toplist', element: <Toplist /> },
      { path: '/discover/playlist', element: <Playlist /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/album', element: <Album /> }
    ]
  },
  { path: '/my', element: <My /> },
  { path: '/download', element: <Download /> },
  { path: '/friend', element: <Friend /> }
]

export default routes
