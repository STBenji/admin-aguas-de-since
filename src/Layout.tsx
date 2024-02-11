import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import { useAuth } from './hooks/useAuth'

export default function Layout() {
  const { error } = useAuth()
  console.log(error)
  console.log('hola')

  return error === null ? (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  ) : null
}
