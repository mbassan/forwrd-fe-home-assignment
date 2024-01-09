import countries from '../../../data/countries.json';
import { ERROR_TYPES, EMPTY_VALUE_ERROR, FIELD_VALIDATION_DATA } from '../constants';

function validateField(user, fieldName) {
  const fieldProps = FIELD_VALIDATION_DATA[fieldName];
  if (!fieldProps) {
    return false;
  }
  return fieldProps.pattern.test(user[fieldName]);
}

function validateCountry(user) {
  return countries.includes(user.country);
}

const FIELD_VALIDATORS = {
  name: validateField,
  email: validateField,
  phone: validateField,
  country: validateCountry,
};

export function validateUser(user, fieldName) {
  const fieldProps = FIELD_VALIDATION_DATA[fieldName];
  const validator = FIELD_VALIDATORS[fieldName];
  if (!fieldProps || !validator) {
    return false;
  }
  if (!user[fieldName] || user[fieldName].length === 0) {
    return { message: EMPTY_VALUE_ERROR, type: ERROR_TYPES.EMPTY };
  }
  const isValid = validator(user, fieldName);
  if (!isValid) {
    return { message: fieldProps.error, type: ERROR_TYPES.ERROR };
  }
  return false;
}

export function validateNewUser(users) {
  const firstUser = users[0];
  if (!firstUser || !!firstUser.id) {
    return false;
  }
  const errors = {};
  Object.keys(FIELD_VALIDATORS).forEach((fieldName) => {
    const errorData = validateUser(firstUser, fieldName);
    if (errorData) {
      errors[fieldName] = errorData;
    }
  });
  return Object.keys(errors).length > 0 ? errors : false;
}
