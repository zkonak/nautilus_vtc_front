import { reservation } from "../../types/reservation.types"

export const saveLocal = (reservation: reservation) => {
    
   
    return {
        type: "SAVE",
        payload: reservation
    }
}


