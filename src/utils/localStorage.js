export const setToken = token => {
  window.localStorage.setItem("token", token);
};

export const unsetToken = () => {
  window.localStorage.removeItem("token");
};

export const getToken = () => {
  if (
    window.localStorage.getItem("token") &&
    window.localStorage.getItem("token") !== "undefined"
  ) {
    return window.localStorage.getItem("token");
  }
  return null;
};
