import React from "react";
import { MenuItem } from "../../atoms/MenuItem/MenuItem";

const MenuBar = ({ label = "Discover more" }) => {
  return (<div>
    <MenuItem>A Propos  |</MenuItem>
    <MenuItem>  Reservation  |</MenuItem>
    <MenuItem>  Forfaits  |</MenuItem>
    <MenuItem>  Contact  |</MenuItem>
    <MenuItem>  Espace Client  |</MenuItem></div>
  );
};

export default MenuBar;