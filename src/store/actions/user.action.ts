import http from "../../services/config";
import { user } from "../../types/user.types"

export const authLogin = (user: user) => {
         
          localStorage.setItem('user',JSON.stringify(user));
          localStorage.setItem('isLogged', "true");
    return {
        type: "LOGIN",
        payload: user
    }
}

export const logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLogged');
    return {
        type: "LOGOUT",
        payload: false
    }
}

  export const refreshToken = async () => {
      const response = await http.get('/users/auth/refresh');
       const access_token = response.data.access_token;
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
        return {
            type: "LOGIN",
            payload: false
        }


}