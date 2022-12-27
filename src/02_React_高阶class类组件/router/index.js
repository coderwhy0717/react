import React from 'react'
import { Navigate } from 'react-router-dom'
import { loginAuth } from '../login_auth'

const Home = React.lazy(() => import('../home'))
const Homet = loginAuth(Home)
const Detail = React.lazy(() => import('../detail'))
const Rom = React.lazy(() => import('../detailRom'))
const Song = React.lazy(() => import('../detailSong'))
const Out = React.lazy(() => import('../not_found'))
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Homet />
  },
  {
    path: '/detail',
    element: <Detail />,
    children: [
      {
        path: '/detail',
        element: <Navigate to="/detail/rom" />
      },
      {
        path: '/detail/rom',
        element: <Rom />
      },
      {
        path: '/detail/song',
        element: <Song />
      }
    ]
  },
  {
    path: '/page',
    element: <Home />
  },
  {
    path: '*',
    element: <Out />
  }
]

export default routes
