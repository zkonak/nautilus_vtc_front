import React from "react";
import iconTelephone from "../../../assets/icon-phone.png";
import { MenuItem } from "../../atoms/MenuItem/MenuItem";
import {Telephone, TelephoneIcon} from "./Telephone"
const TelephoneComponent = ({ label = "tel" }) => {
  return (<Telephone>
    <TelephoneIcon src={iconTelephone}/>
    <MenuItem>{label}</MenuItem>
    </Telephone>
    );
};

export default TelephoneComponent;