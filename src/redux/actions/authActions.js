import * as types from './../actionTypes';
import auth from 'services/auth';

export const actLogin = payload => dispatch =>
  auth.login(payload).then(res =>
    dispatch({
      type: types.AUTH_LOGIN,
      user: res
    })
  );

export const actLogout = () => dispatch =>
  auth.logout().then(() =>
    dispatch({
      type: types.AUTH_LOGOUT
    })
  );

export const actCheckAuth = token => dispatch =>
  auth
    .getUserByToken(token)
    .then(res =>
      dispatch({
        type: types.AUTH_CHECK,
        user: res
      })
    )
    .catch(() => {
      dispatch({
        type: types.AUTH_LOGOUT
      });
    });
