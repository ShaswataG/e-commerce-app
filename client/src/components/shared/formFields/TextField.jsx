import PropTypes from 'prop-types'

import FormFieldError from './FormFieldError'
import FormFieldLabel from './FormFieldLabel'

export default function TextField({
  name,
  type = 'text',
  label,
  value,
  error,
  isOptional = false,
  onChange,
}) {
  return (
    <div>
      <FormFieldLabel name={name} label={label} />
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full border rounded-md p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}
        required={!isOptional}
      />
      <FormFieldError error={error} />
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  isOptional: PropTypes.bool,
  onChange: PropTypes.func,
}
