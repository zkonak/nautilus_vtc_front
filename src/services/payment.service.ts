import { payment } from "../types/payment.types";
import http from "./config";

export const savePayment = async (payment:payment|null): Promise<any> => {
    
    
    return await http.post('/payment', payment);
}



export const downloadFacture = async (paymentId:number|null): Promise<any> => {
    
    
    return await http.post('/payment/download',{paymentId:paymentId});
}
