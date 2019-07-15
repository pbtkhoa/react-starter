import { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT } from './../actionTypes';
import initialState from './../initialState';

import { setToken, unsetToken } from 'utils/localStorage';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      setToken(action.user.token);
      return {
        ...state,
        user: action.user,
        authenticated: true
      };
    case AUTH_CHECK:
      return {
        ...state,
        user: action.user,
        authenticated: true
      };
    case AUTH_LOGOUT:
      unsetToken();
      return {
        ...state,
        user: null,
        authenticated: false
      };
    default:
      return { ...state };
  }
};
