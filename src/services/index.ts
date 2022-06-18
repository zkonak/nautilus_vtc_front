import { signIn, getAll,signUp } from "./user.service";
import { saveReservation,getReservation,getReservationByUser,getReservationCalcul } from "./reservation.service";
import { saveGamme,getGamme,getGammeOne } from "./gamme.service";
import { savePackage,getPackages,getPackageOne } from "./package.services";
import { getService, getServiceOne, saveService } from "./service.service";

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

export const packagesServices={
    savePackage,
    getPackages,
    getPackageOne
}

export const serviceServices={
    saveService,
    getService,
    getServiceOne
}