import { IS_LOGGED_IN, IS_LOGGED_OUT } from "../Constants/Redux_constants";

export const isLoggedIn = (...item) => {
  return {
    type: IS_LOGGED_IN,
    payload: item,
  };
};

export const isLoggedOut = () => {
  return {
    type: IS_LOGGED_OUT,
  };
};
