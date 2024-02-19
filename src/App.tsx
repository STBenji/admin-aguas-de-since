import { Outlet, createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard'
import Loading from './lib/Loading'
import Layout from './Layout'
import ContentManager from './pages/ContentManager'
import UserPage from './pages/Users'
import RequestUser from './pages/requests'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />
      },
      {
        path: '/users',
        element: <UserPage />
      },
      {
        path: '/bills',
        element: <Loading />
      },
      {
        path: '/content',
        element: <Outlet />,
        children: [
          {
            path: 'transparency',
            element: <ContentManager />
          }
        ]
      },
      {
        path: '/request',
        element: <RequestUser />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
