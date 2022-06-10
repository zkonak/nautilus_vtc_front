import { gamme } from "../types/gamme.types";
import http from "./config";

export const saveGamme = async (gamme:gamme): Promise<any> => {
    return await http.post('/carType', gamme);
}

export const getGamme = async () : Promise<any> => {
    return await http.get('/carType');
}
export const getGammeOne = async (id:number) : Promise<any> => {
    console.log(id,"iddd")
    return await http.get('/carType/get',{params:{id:id}});
}

