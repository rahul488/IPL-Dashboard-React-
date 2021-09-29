import { IS_LOGGED_IN, IS_LOGGED_OUT } from "../Constants/Redux_constants";

const initialState = {
  isLoggedin: false,
  detail: [],
};

const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedin: true,
        detail: action.payload,
      };

    case IS_LOGGED_OUT:
      return {
        ...state,
        isLoggedin: false,
      };
    default:
      return state;
  }
};

export default isLogin;
