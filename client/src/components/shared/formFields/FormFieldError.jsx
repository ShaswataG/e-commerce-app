import PropTypes from 'prop-types'

export default function FormFieldError({ error }) {
  return error && <p className="text-red-500 text-sm">{error}</p>
}

FormFieldError.propTypes = { error: PropTypes.string }
