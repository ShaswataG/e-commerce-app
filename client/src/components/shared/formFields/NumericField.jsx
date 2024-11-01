import PropTypes from 'prop-types'

import FormFieldError from './FormFieldError'
import FormFieldLabel from './FormFieldLabel'

export default function NumericField({ name, label, value, error, isOptional = false, onChange }) {
  return (
    <div>
      <FormFieldLabel name={name} label={label} />
      <input
        id={name}
        type="number"
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

NumericField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  error: PropTypes.string,
  isOptional: PropTypes.bool,
  onChange: PropTypes.func,
}
