import { useSelector } from 'react-redux'

export default function useAuthHeaders() {
  const { token } = useSelector(state => state.user)

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}
