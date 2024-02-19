import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<null | boolean>(true)

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_API_ROUTE}/v1/users/auth`, {}, { withCredentials: true })
      .then(() => {
        setError(null)
        return
      })
      .catch(() => {
        navigate('/login')
        return
      })
  }, [navigate])

  return { error }
}
