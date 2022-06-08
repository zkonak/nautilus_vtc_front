import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import reservationReducer from "./reservation.reducer"

export default combineReducers({
    user: userReducer,
    reservation:reservationReducer
});