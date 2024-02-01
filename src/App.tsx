import { Outlet, createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard'
import Loading from './lib/Loading'
import Layout from './Layout'
import ContentManager from './pages/ContentManager'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />
      },
      {
        path: 'users',
        element: <DashboardPage />
      },
      {
        path: 'bills',
        element: <Loading />
      },
      {
        path: 'content',
        element: <Outlet />,
        children: [
          {
            path: 'transparency',
            element: <ContentManager />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
