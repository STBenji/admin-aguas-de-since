import { Outlet, useNavigate } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.post(url, {}, { withCredentials: true }).then((res) => res.data)

export default function Layout() {
  const navigate = useNavigate()
  const { error } = useSWR('http://localhost:3000/api/v1/users/auth', fetcher)

  if (error) {
    navigate('/login')
    return null
  }

  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  )
}
