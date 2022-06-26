import { userStore } from "../../types/user.types";
     const user=localStorage.getItem("user")
    
     const userState=user ? JSON.parse(user) : null;
     

const initialState = {
    user: userState,
    isLogged: localStorage.getItem("isLogged")?true:false,
  
};

export default (state: userStore = initialState, action: {type: string, payload: object | string | boolean}) => {
    const {type, payload} = action;
    
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                user: payload,
                isLogged: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isLogged: false
            }
        default:
            return state;
            break;
    }
};