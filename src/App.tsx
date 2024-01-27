import { createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard'
import Loading from './lib/Loading'
import Layout from './Layout'

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
        element: <DashboardPage />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
