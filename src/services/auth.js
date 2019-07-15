// import axios from 'config/axios';

class AuthService {
  /**
   * Login
   * @param {*} payload
   */
  async login(payload) {
    let userInfo = await new Promise(resolve => {
      resolve({
        token: '12345678'
      });
    });

    return userInfo;
  }

  /**
   * Logout
   */
  logout() {
    return new Promise(resolve => {
      resolve(true);
    });
  }

  /**
   * Get User By Token
   * @param {*} payload
   */
  async getUserByToken(token) {
    let userInfo = await new Promise(resolve => {
      resolve({
        token: token
      });
    });

    return userInfo;
  }
}

export default new AuthService();
