import { service } from "../types/service.types";
import http from "./config";

export const saveService = async (service:Omit<service, "id"|"description"|"CarType">): Promise<any> => {
    return await http.post('/service', service);
}

export const getService = async () : Promise<any> => {
    return await http.get('/serviceAll');
}
export const getServiceOne = async (id:number| undefined) : Promise<any> => {
    
    return await http.get('/service',{params:{id:id}});
}