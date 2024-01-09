export const ERROR_TYPES = {
  EMPTY: 'empty',
  ERROR: 'error',
};

export const EMPTY_VALUE_ERROR = 'Please enter a value.';

export const FIELD_VALIDATION_DATA = {
  name: {
    validator: () => {},
    pattern: /^[a-z\s]+$/i,
    error: 'Only accepts characters a-z.',
  },
  email: {
    validator: () => {},
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    error: 'Invalid email',
  },
  phone: {
    validator: () => {},
    pattern: /^\+[1-9][0-9]{7,14}$/,
    error: 'Invalid phone number',
  },
  country: { validator: () => {}, error: 'Please select a valid country.' },
};

export const EMPTY_USER = {
  country: '',
  email: '',
  id: '',
  name: '',
  phone: '',
};
