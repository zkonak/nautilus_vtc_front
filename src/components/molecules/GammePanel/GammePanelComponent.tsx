import {GammePanelBase,GammePanelDiv,GammePanelImg,GammePanelText} from "./GammePanel"
import iconCharge from "../../../assets/icon-charge.png";
import iconWifi from "../../../assets/icon-wifi.png";
import iconWater from "../../../assets/icon-water.png";
import iconCard from "../../../assets/icon-card.png";
const GammePanelComponent = ({ }) => {
  return (<GammePanelBase>
      <GammePanelDiv><GammePanelImg src={iconCharge}/><GammePanelText>Chargeurs</GammePanelText></GammePanelDiv>
      <GammePanelDiv><GammePanelImg src={iconWifi}/><GammePanelText>Wi-Fi</GammePanelText></GammePanelDiv>
      <GammePanelDiv><GammePanelImg src={iconWater}/><GammePanelText>L’eau</GammePanelText></GammePanelDiv>
      <GammePanelDiv><GammePanelImg src={iconCard}/><GammePanelText>Terminal CB</GammePanelText></GammePanelDiv>
      
    </GammePanelBase>
    
   
    );
};

export default GammePanelComponent;