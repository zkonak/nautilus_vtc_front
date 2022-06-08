import { user } from "../../types/user.types"

export const authLogin = (user: user) => {
    localStorage.setItem('access-token', user.refreshToken);
    
    return {
        type: "LOGIN",
        payload: user
    }
}

export const logout = () => {
    localStorage.removeItem('access-token');
    return {
        type: "LOGOUT",
        payload: false
    }
}