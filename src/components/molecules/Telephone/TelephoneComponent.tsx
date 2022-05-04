import React from "react";
import iconTelephone from "../../../assets/icon-phone.png";
import { MenuItem } from "../../atoms/MenuItem/MenuItem";
import {Telephone} from "./Telephone"
const TelephoneComponent = ({ label = "tel" }) => {
  return (<Telephone>
    <img src={iconTelephone} width="50px"/>
    <MenuItem>{label}</MenuItem>
    </Telephone>
    );
};

export default TelephoneComponent;