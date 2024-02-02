import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/v1/users/auth', {}, { withCredentials: true })
      .then(() => {
        navigate('/dashboard')
        return
      })
      .catch(() => {
        navigate('/login')
        setError(true)
        return
      })
  }, [navigate])

  return { error }
}
