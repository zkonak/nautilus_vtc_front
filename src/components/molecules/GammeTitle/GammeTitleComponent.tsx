import { useState } from "react";
import GammeDetailComponent from "../GammeDetail/GammeDetailComponent";
import {GammeTitleDiv, GammeTitleDivBase,GammeTitleText} from "./GammeTitle"

const GammeTitleComponent = ({ }) => {
  const [title, setTitle] = useState("CONFORT");

  const [active, setActive] = useState("CONFORT");
  const handleClick = async (title:string) => {
    setTitle(title);
    setActive(title);
  
   // console.log(attr)

}
  return (<><GammeTitleDivBase>
      <GammeTitleDiv isActive={active==="CONFORT"?true:false}  onClick={(e:React.MouseEvent<HTMLDivElement>) => handleClick("CONFORT")}><GammeTitleText isActive={active=="CONFORT"?true:false}>CONFORT</GammeTitleText></GammeTitleDiv>
      <GammeTitleDiv isActive={active==="LUXE"?true:false} onClick={(e:React.MouseEvent<HTMLDivElement>) => handleClick("LUXE")}><GammeTitleText isActive={active=="LUXE"?true:false}>LUXE</GammeTitleText></GammeTitleDiv>
      <GammeTitleDiv isActive={active==="VAN"?true:false} onClick={(e:React.MouseEvent<HTMLDivElement>) => handleClick("VAN")}><GammeTitleText isActive={active=="VAN"?true:false}>VAN</GammeTitleText></GammeTitleDiv>
      </GammeTitleDivBase>
      <GammeDetailComponent active={active} />
    
   </>
    );
};

export default GammeTitleComponent;