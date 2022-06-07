import React from "react";
import { Banner, Rectangle} from "./Banner";
import ButtonComponent from '../../atoms/Button/ButtonComponent';
import { Label } from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";



const BannerComponent = () => {
  let navigate = useNavigate();

  return ( <>
    <Banner/>
    <Rectangle>
        <Label>NAUTILUS VTC</Label>
        <Label>Votre Chauffeur Privé à Paris</Label>
        <ButtonComponent handleClick={()=>{navigate("/reservationform")}} label="Réservez une course"></ButtonComponent>
    </Rectangle>
    </>
      
  );
};

export default BannerComponent;