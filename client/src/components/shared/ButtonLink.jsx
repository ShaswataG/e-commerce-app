import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function ButtonLink({ children, href }) {
  return (
    <Link to={href}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {children}
      </button>
    </Link>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}
