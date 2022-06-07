import {GammeDetailDiv,GammeDetailImg} from "./GammeDetail"
import { TextLight } from "../ServiceTitle/ServiceTitle";
import imgConfort from "../../../assets/toyotacorolla.png";
import imgLuxe from "../../../assets/mercedes.png";
import imgVan from "../../../assets/van.png";

const GammeDetailComponent = (props:any) => {
  
  let image="";
  let text="";
  // const [image, setImage] = useState("");
  // const [text, setText] = useState("");

  if(props.active=="CONFORT"){
    image=imgConfort;
    text=" Hybride ou  électrique Max 3 personnes et 2 valises"

  }
  else if(props.active=="LUXE"){
    image=imgLuxe;
    text="Mercedes Max 3 personnes et 2 valises"

  }
  else if(props.active=="VAN"){
    image=imgVan;
    text="Van  Max 5 personnes et 3 valises"
  }

  return (<GammeDetailDiv>
      <GammeDetailImg src={image}/>
      <TextLight>{text}</TextLight>
      
      </GammeDetailDiv>
      //L’économique et l’écologique - hybride ou électrique Max 3 personnes et 2 valises
    
   
    );
};

export default GammeDetailComponent;