import {  gammeServices, reservationServices } from "../services";
import { reservation } from "../types/reservation.types";

export const getPrices = async(reservation:reservation)=>{
    const gammeResponse = await gammeServices.getGamme();
    const response = await reservationServices.getReservationCalcul(reservation,gammeResponse);
    console.log("calcul",response)
   

}