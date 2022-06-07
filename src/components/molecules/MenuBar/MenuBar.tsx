import React from "react";
import { MenuItem, MenuLink } from "../../atoms/MenuItem/MenuItem";

const MenuBar = () => {
  return (<div>
    <MenuLink href="/aboutus"><MenuItem>A Propos  |</MenuItem></MenuLink>
    <MenuLink href="/reservationform"><MenuItem>  Reservation  |</MenuItem></MenuLink>
    <MenuLink href="/package"><MenuItem>  Forfaits  |</MenuItem></MenuLink>
    <MenuLink href="/contact"><MenuItem>  Contact  |</MenuItem></MenuLink>
    <MenuLink href="/dashboard"><MenuItem>  Espace Client  |</MenuItem></MenuLink></div>
  );
};

export default MenuBar;