import {GammeDetailDiv,GammeDetailImg} from "./GammeDetail"
import { TextLight } from "../ServiceTitle/ServiceTitle";
import imgToyota from "../../../assets/toyotacorolla.png";
const GammeDetailComponent = ({ }) => {
  return (<GammeDetailDiv>
      <GammeDetailImg src={imgToyota}/>
      <TextLight>L’économique et l’écologique - hybride ou électrique
 Max 3 personnes et 2 valises</TextLight>
      
      </GammeDetailDiv>
    
   
    );
};

export default GammeDetailComponent;