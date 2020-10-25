import { checkEmail } from "./validationHelpers/checkEmail";
import { checkEmptyField } from "./validationHelpers/checkEmptyField";

export const validationResetPassword = (arrOfFields) => {
  const email = arrOfFields[0];

  // It checks if there is an empty field
  const isEmptyField = checkEmptyField(arrOfFields);
  if (isEmptyField) {
    return false;
  }

  // It checks if email is incorrect
  const isValidEmail = checkEmail(email);
  if (!isValidEmail) {
    return false;
  }

  return true;
};
