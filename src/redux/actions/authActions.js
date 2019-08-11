import auth from "services/auth";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_CHECK = "AUTH_CHECK";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const actLogin = payload => dispatch =>
  auth.login(payload).then(res =>
    dispatch({
      type: AUTH_LOGIN,
      user: res
    })
  );

export const actLogout = () => dispatch =>
  auth.logout().then(() =>
    dispatch({
      type: AUTH_LOGOUT
    })
  );

export const actCheckAuth = token => dispatch =>
  auth
    .getUserByToken(token)
    .then(res =>
      dispatch({
        type: AUTH_CHECK,
        user: res
      })
    )
    .catch(() => {
      dispatch({
        type: AUTH_LOGOUT
      });
    });
