
import { SmallButtonComponent } from "../../atoms/Button/ButtonComponent";
import { TextField } from "../../atoms/TextArea/TextArea";
import { TextAreaComponent } from "../../atoms/TextArea/TextAreaComponent";
import { ContactBase, ContactDiv } from "./Contact";

const ContactComponent = () => {
    return (<ContactBase>
      <TextAreaComponent placeholder="Votre Message.."></TextAreaComponent>
      <ContactDiv>
          <TextField placeholder="Votre Email.."></TextField>
          <TextField placeholder="Votre Nom.."></TextField>
          <SmallButtonComponent label="Envoyer"></SmallButtonComponent>
      </ContactDiv>
    </ContactBase>
    );
  };
  
  export default ContactComponent;