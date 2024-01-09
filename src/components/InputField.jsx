import { useState } from 'react';
import StyledTextField from './StyledTextField';

let timeoutRef;
export function debounce(callback) {
  clearTimeout(timeoutRef);
  timeoutRef = setTimeout(() => callback(), 200);
}

const InputField = ({ name, value, onChangehandler, error, disabled, placeholder }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onChange = (e) => {
    setCurrentValue(e.target.value);
    debounce(() => onChangehandler(e.target.name, e.target.value));
  };

  return (
    <StyledTextField
      name={name}
      value={currentValue}
      onChange={onChange}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth
      autoComplete="off"
      inputProps={{
        autoComplete: 'off',
      }}
    />
  );
};

// TODO: Implement passed props
InputField.defaultProps = {
  name: 'text_field_name',
  value: '',
  onChangehandler: () => {},
  error: false,
  disabled: false,
  placeholder: '',
};

export default InputField;
