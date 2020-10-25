import { checkEmail } from "./validationHelpers/checkEmail";
import { checkEmptyField } from "./validationHelpers/checkEmptyField";
import { checkPasswordLength } from "./validationHelpers/checkPassword";

export const validationSignIn = (arrOfFields) => {
  const [password, email] = [arrOfFields[0], arrOfFields[1]];

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

  const isCorrectLength = checkPasswordLength(password);
  if (!isCorrectLength) {
    return false;
  }

  return true;
};
