import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import { useAuth } from './hooks/useAuth'

export default function Layout() {
  const { error } = useAuth()

  if (error) return null

  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  )
}
