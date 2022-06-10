import { signIn, getAll,signUp } from "./user.service";
import { saveReservation,getReservation,getReservationByUser,getReservationCalcul } from "./reservation.service";
import { saveGamme,getGamme,getGammeOne } from "./gamme.service";

export const userServices = { 
    signIn, 
    getAll,
    signUp
};

export const reservationServices = { 
    saveReservation, 
    getReservation,
    getReservationByUser,
    getReservationCalcul
};
export const gammeServices = { 
    saveGamme, 
    getGamme,
    getGammeOne
    
};