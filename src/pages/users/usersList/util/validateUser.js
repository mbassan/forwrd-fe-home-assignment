import countries from '../../../../data/countries.json';

export const ERROR_TYPES = {
  EMPTY: 'empty',
  ERROR: 'error',
};

const EMPTY_VALUE_ERROR = 'Please enter a value.';

const FIELD_VALIDATION = {
  name: {
    validator: validateField,
    pattern: /^[a-z\s]+$/i,
    error: 'Only accepts characters a-z.',
  },
  email: {
    validator: validateField,
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    error: 'Invalid email',
  },
  phone: {
    validator: validateField,
    pattern: /^\+[1-9][0-9]{7,14}$/,
    error: 'Invalid phone number',
  },
  country: { validator: validateCountry, error: 'Please select a valid country.' },
};

function validateField(user, fieldName) {
  const fieldProps = FIELD_VALIDATION[fieldName];
  if (!fieldProps) {
    return false;
  }
  return fieldProps.pattern.test(user[fieldName]);
}

function validateCountry(user) {
  return countries.includes(user.country);
}

export function validateUser(user, fieldName) {
  const fieldProps = FIELD_VALIDATION[fieldName];
  if (!fieldProps) {
    return false;
  }
  if (!user[fieldName] || user[fieldName].length === 0) {
    return { message: EMPTY_VALUE_ERROR, type: ERROR_TYPES.EMPTY };
  }
  const isValid = fieldProps.validator(user, fieldName);
  if (!isValid) {
    return { message: fieldProps.error, type: ERROR_TYPES.ERROR };
  }
  return false;
}
