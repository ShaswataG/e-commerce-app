import PropTypes from 'prop-types'

export default function PageTitle({ title }) {
  return <h1 className="text-2xl font-bold mb-4">{title}</h1>
}

PageTitle.propTypes = { title: PropTypes.string.isRequired }
