import { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useLocation } from 'react-router'

export default function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const location = useLocation()
  const session = cookie.get('user_session')

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
