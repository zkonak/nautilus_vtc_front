import { signIn, getAll,signUp } from "./user.service";
import { saveReservation,getReservation,getReservationByUser } from "./reservation.service";


export const userServices = { 
    signIn, 
    getAll,
    signUp
};

export const reservationServices = { 
    saveReservation, 
    getReservation,
    getReservationByUser
};