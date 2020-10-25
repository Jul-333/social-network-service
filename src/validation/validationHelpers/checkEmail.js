import { MESSAGE, TYPE_ALERT } from "../../constants";
import { alertManager } from "../../redux/actions/helpersCommon/showAlert";

// It checks if email is incorrect
export const checkEmail = (email) => {
  const regex = /^[-._a-z0-9]+@([a-z]+\.)+[a-z]{2,6}$/;
  const isValid = regex.test(email);

  if (!isValid) {
    alertManager(TYPE_ALERT.ERROR, MESSAGE.INCORRECT_EMAIL);
    return false;
  }
  return true;
};
