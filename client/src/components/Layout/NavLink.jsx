import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavLink({ children, href }) {
  return (
    <li>
      <Link to={href} className="text-gray-600 hover:text-blue-500">
        {children}
      </Link>
    </li>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}
