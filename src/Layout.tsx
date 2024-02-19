import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import { useAuth } from './hooks/useAuth'

export default function Layout() {
  const { error } = useAuth()

  return error === null ? (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  ) : null
}
