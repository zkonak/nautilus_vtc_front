import { user,userComplete } from "../types/user.types";
import http from "./config";

export const signIn = async (user: Omit<user, "access_token">): Promise<any> => {
    return await http.post('/users/authenticate', user);
}

export const getAll = async () : Promise<any> => {
    return await http.get('/users');
}

export const signUp = async (user:userComplete): Promise<any> => {
    return await http.post('/user', user);
}