import { ERROR_TYPES } from '../constants';

function deleteFieldErrorState({ errors, userId, name }) {
  delete errors[userId]?.[name];
  if (errors[userId] && Object.keys(errors[userId]).length === 0) {
    delete errors[userId];
  }
}

export function updateFieldErrorState({ errors, errorData, userId, name }) {
  const updatedErrors = { ...errors };
  if (!errorData) {
    deleteFieldErrorState({ errors, userId, name });
  } else {
    const prevRowErrors = updatedErrors[userId] ?? {};
    updatedErrors[userId] = { ...prevRowErrors, [name]: errorData };
  }
  return updatedErrors;
}

function countErrors(errors) {
  const errorCounts = Object.values(errors).reduce(
    (counts, rowErrors) => {
      Object.values(rowErrors).forEach((errorData) => {
        if (errorData.type === ERROR_TYPES.EMPTY) {
          counts.empty += 1;
        }
        if (errorData.type === ERROR_TYPES.ERROR) {
          counts.invalid += 1;
        }
      });
      return counts;
    },
    { empty: 0, invalid: 0 }
  );
  return errorCounts;
}

function buildErrorSummaryMessage(errorCounts) {
  const messages = [];
  if (errorCounts.empty > 0) {
    messages.push(`Empty Fields - ${errorCounts.empty}`);
  }
  if (errorCounts.invalid > 0) {
    messages.push(`Invalid Fields - ${errorCounts.invalid}`);
  }
  if (messages.length > 0) {
    return messages.join(', ');
  }
  return '';
}

export function compileErrorSummary(errors) {
  if (Object.keys(errors).length === 0) {
    return '';
  }
  const errorCounts = countErrors(errors);
  const summaryMessage = buildErrorSummaryMessage(errorCounts);
  return summaryMessage;
}
