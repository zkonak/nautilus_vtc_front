import {GammeTitleDiv, GammeTitleDivBase,GammeTitleText} from "./GammeTitle"
const GammeTitleComponent = ({ }) => {
  return (<GammeTitleDivBase>
      <GammeTitleDiv isActive><GammeTitleText isActive>CONFORT</GammeTitleText></GammeTitleDiv>
      <GammeTitleDiv><GammeTitleText>LUXE</GammeTitleText></GammeTitleDiv>
      <GammeTitleDiv><GammeTitleText>VAN</GammeTitleText></GammeTitleDiv>
      </GammeTitleDivBase>
    
   
    );
};

export default GammeTitleComponent;