import { reservation } from "../types/reservation.types";
import http from "./config";

export const saveReservation = async (reservation:reservation): Promise<any> => {
    return await http.post('/reservation', reservation);
}

export const getReservation = async (reservationId:number) : Promise<any> => {
    return await http.get('/reservation',{data:{id:reservationId}});
}

export const getReservationByUser = async (userId:number) : Promise<any> => {
    return await http.get('/reservationAll',{data:{UserId:userId}});
}