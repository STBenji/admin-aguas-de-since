import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'

/*
 * Components
 */

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
])

export default router
