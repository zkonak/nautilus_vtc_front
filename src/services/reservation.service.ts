import { gamme } from "../types/gamme.types";
import { reservation } from "../types/reservation.types";
import { addUserId } from "../utils/getUserId";
import http from "./config";

export const saveReservation = async (reservation:reservation| null): Promise<any> => {
    
    
    return await http.post('/reservation', await addUserId(reservation));
}

export const getReservation = async (reservationId:number) : Promise<any> => {
    return await http.get('/reservation',{data:{id:reservationId}});
}

export const getReservationByUser = async (userId:number) : Promise<any> => {
    return await http.get('/reservationAll',{data:{UserId:userId}});
}

export const getReservationCalcul = async (reservation:reservation,gamme:gamme) : Promise<any> => {
    return await http.post('/reservationCalcul',{reservation,gamme});
}