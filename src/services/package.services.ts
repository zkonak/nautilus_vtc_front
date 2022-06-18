import { packages } from "../types/package.types";
import http from "./config";

export const savePackage = async (packages:packages): Promise<any> => {
    return await http.post('/package', packages);
}

export const getPackages = async () : Promise<any> => {
    return await http.get('/package');
}
export const getPackageOne = async (id:number| undefined) : Promise<any> => {
    
    return await http.get('/package/get',{params:{id:id}});
}

