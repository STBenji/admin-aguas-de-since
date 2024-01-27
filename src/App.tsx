import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard'
import UserPage from './pages/Users'

/*
 * Components
 */

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  },
  {
    path: '/users',
    element: <UserPage />
  }
])

export default router
