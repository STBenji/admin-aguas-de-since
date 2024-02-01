import { Outlet, useNavigate } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import useAuthentication from './hooks/useAuthentication'
import { useEffect } from 'react'

export default function Layout() {
  const { auth } = useAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(auth)
    if (!auth) {
      navigate('/login')
    }
  }, [])

  return auth ? (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  ) : null
}
