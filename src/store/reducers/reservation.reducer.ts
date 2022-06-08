import { reservationStore } from "../../types/reservation.types";

const initialState = {
    reservation: null,
    
};

export default (state: reservationStore = initialState, action: {type: string, payload: object | string | boolean}) => {
    const {type, payload} = action;
    
    switch (type) {
        case "SAVE":
            return {
                ...state,
                reservation: payload,
                
            }
       
        default:
            return state;
            break;
    }
};