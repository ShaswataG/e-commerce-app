import PropTypes from 'prop-types'

export default function FormFieldLabel({ name, label }) {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
  )
}

FormFieldLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
