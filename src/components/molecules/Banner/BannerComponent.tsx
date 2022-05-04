import React from "react";
import { Banner, Rectangle} from "./Banner";
import ButtonComponent from '../../atoms/Button/ButtonComponent';
import { Label } from "../../atoms/Button/Button";
const BannerComponent = () => {
  return ( <>
    <Banner/>
    <Rectangle>
        <Label>NAUTILUS VTC</Label>
        <Label>Votre Chauffeur Privé à Paris</Label>
        <ButtonComponent label="Réservez une course"></ButtonComponent>
    </Rectangle>
    </>
      
  );
};

export default BannerComponent;