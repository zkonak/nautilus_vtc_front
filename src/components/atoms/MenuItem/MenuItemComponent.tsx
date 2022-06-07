
import React from "react";
import { MenuItem } from "./MenuItem";

const MenuItemComponent = ({ label = "Discover more" }) => {
  return (
    
    <MenuItem>
      {label}
    </MenuItem>
    
  );
};

export default MenuItemComponent;