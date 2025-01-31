import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken():
    if (token){
      return jwtDecode<JwtPayload>(token);
    }
  }

  loggedIn() {
    const token = this.getToken():
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    try {
      const decode = jwtDecode<JwtPayload>(token)
      if (decode.exp && decode.exp < Date.now() / 1000) {
        return true;
      }
      return false
    } catch(e){
      return true
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
  }

  logout() {
    localStorage.removeItemItem('id_token');
  }
}

export default new AuthService();
