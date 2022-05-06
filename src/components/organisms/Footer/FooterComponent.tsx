
import HeaderComponent from "../Header/HeaderComponent";
import { Footer, FooterDiv, SmallTextLight } from "./Footer";
const FooterComponent = () => {
  return (<Footer>
       <HeaderComponent/>
       <FooterDiv>
           <SmallTextLight>Expert dans le transport de personne en VTC,
Nautilus VTC propose ses services en région 
Île-de-France et sur Paris.©2022 Nautilus VTC</SmallTextLight>

   
       </FooterDiv>
  </Footer>
    

    
  );
};

export default FooterComponent;