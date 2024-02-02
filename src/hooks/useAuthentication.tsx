import { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useLocation } from 'react-router'
import axios from 'axios'

export default function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const location = useLocation()
  const session = cookie.get('user_session')

  axios.post(`${import.meta.env.VITE_API_ROUTE}/v1/users/auth`, {}, { withCredentials: true }).then((res) => {
    console.log(res)
  })
  console.log(session)
  console.log(document.cookie)

  useEffect(() => {
    if (session) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return {
    auth: isAuthenticated,
    location: location.pathname
  }
}
