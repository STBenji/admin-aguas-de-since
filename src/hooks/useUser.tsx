import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function useUser(version: string, route: string, param?: string) {
  const url = `${import.meta.env.VITE_API_ROUTE}/${version}/${route}${param ? `/${param}` : ''}`
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    data,
    error,
    isLoading
  }
}
