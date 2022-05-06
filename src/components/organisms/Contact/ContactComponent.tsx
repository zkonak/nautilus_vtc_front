
import { SmallButtonComponent } from "../../atoms/Button/ButtonComponent";
import { InputComponent } from "../../atoms/TextArea/TextAreaComponent";
import { TextAreaComponent } from "../../atoms/TextArea/TextAreaComponent";
import { TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import { ContactBase, ContactDiv } from "./Contact";

const ContactComponent = () => {
    return (<ContactBase>
        <TextLightWithSpace >Ecrivez à Nautilus VTC</TextLightWithSpace>
      <TextAreaComponent placeholder="Votre Message.."></TextAreaComponent>
      <ContactDiv>
          <InputComponent type="mail" placeholder="Votre Email.."></InputComponent>
          <InputComponent  type="text" placeholder="Votre Nom.."></InputComponent>
          <SmallButtonComponent label="Envoyer"></SmallButtonComponent>
      </ContactDiv>
    </ContactBase>
    );
  };
  
  export default ContactComponent;