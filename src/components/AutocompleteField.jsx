import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import StyledTextField from './StyledTextField';

const AutocompleteField = ({
  name,
  value,
  onChangehandler,
  error,
  disabled,
  placeholder,
  options,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onChange = (_, value) => {
    setCurrentValue(value);
    onChangehandler(name, value);
  };

  return (
    <Autocomplete
      name={name}
      value={currentValue}
      options={options}
      onChange={onChange}
      error={error}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth
      renderInput={(params) => (
        <StyledTextField {...params} variant="outlined" size="small" fullWidth />
      )}
    />
  );
};

// TODO: Implement passed props
AutocompleteField.defaultProps = {
  name: 'autocomplete_field_name',
  value: '',
  onChangehandler: () => {},
  error: false,
  disabled: false,
  placeholder: '',
  options: [],
};

export default AutocompleteField;
