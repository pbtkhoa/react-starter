// import axios from 'configs/axios';

class AuthService {
  /**
   * Login
   * @param {*} payload
   */
  login = payload => {
    return new Promise(resolve => {
      resolve({
        token: "12345678"
      });
    });
  };

  /**
   * Logout
   */
  logout = () => {
    return new Promise(resolve => {
      resolve(true);
    });
  };

  /**
   * Get User By Token
   * @param {*} payload
   */
  getUserByToken = token => {
    return new Promise((resolve, reject) => {
      if (token) {
        resolve({
          token
        });
      } else {
        reject();
      }
    });
  };
}

export default new AuthService();
