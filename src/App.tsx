import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import DashboardPage from './pages/Dashboard/Dashboard'

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
  }
])

export default router
