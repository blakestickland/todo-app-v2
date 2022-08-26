
class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log(`Authentication Service called by user: ${username}`);
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }

  getLoggedInUsername() {
    return sessionStorage.getItem("authenticatedUser");
  }
}

export default new AuthenticationService();