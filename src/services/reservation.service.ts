import { gamme } from "../types/gamme.types";
import { reservation } from "../types/reservation.types";
import { addUserId } from "../utils/getUserId";
import http from "./config";

export const saveReservation = async (reservation:reservation| null): Promise<any> => {
    
    
    return await http.post('/reservation', await addUserId(reservation));
}

export const getReservation = async (reservationId:number) : Promise<any> => {
    return await http.get('/reservation',{params:{id:reservationId}});
}
export const getAllReservation = async () : Promise<any> => {
    return await http.get('/reservationAll');
}

export const getReservationByUser = async (userId:any) : Promise<any> => {
    return await http.get('/reservationAllByUser',{params:{UserId:userId}});
}

export const getReservationCalcul = async (reservation:reservation,gamme:any) : Promise<any> => {
    return await http.post('/reservationCalcul',{reservation,gamme});
}

export const deleteReservation = async (reservationId:number) : Promise<any> => {
    return await http.delete('/reservation',{params:{id:reservationId}});
}
