import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  const { isAdmin } = useSelector(state => state.user)

  if (!isAdmin) {
    return <h2>Permission Denied</h2>
  }

  return <Outlet />
}
