
import { SmallButtonComponent } from "../../atoms/Button/ButtonComponent";
import { InputComponent } from "../../atoms/TextArea/TextAreaComponent";
import { TextAreaComponent } from "../../atoms/TextArea/TextAreaComponent";
import { TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import { ContactBase, ContactDiv } from "./Contact";
import ErrorAlert from '../../atoms/ErrorAlert/ErrorAlert';
import { useState } from "react";

const ContactComponent = () => {
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const [mail, setMail] = useState("");

  const [name, setName] = useState("");

  const [messageError, setMessageError] = useState("");

  const handleClick = async (props: any) => {
    try {
        
        if(text===''||text==null){
        setMessageError("Message est invalid");
        setError(true)
      }
       else if(mail===''||mail==null){
          setMessageError("Email est invalid");
          setError(true)
        }
        else if(name===''||name==null){
          setMessageError("Nom est invalid");
          setError(true)
        }
        
       
        else{
          setMessageError("");
          setError(false)
        }


       
 
         
    } catch (error: any) {
        setError(true);
    }
}


    return (<ContactBase>
        <TextLightWithSpace >Ecrivez à Nautilus VTC</TextLightWithSpace>
         <ErrorAlert error={error} setError={setError} message={messageError} /> 
      <TextAreaComponent placeholder="Votre Message.." value={text} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}></TextAreaComponent>
      {/* </TextAreaComponent> */}
      <ContactDiv>
     
          <InputComponent type="mail" placeholder="Votre Email.."  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}></InputComponent>
          <InputComponent  type="text" placeholder="Votre Nom.."  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></InputComponent>
          <SmallButtonComponent label="Envoyer" handleClick={handleClick}></SmallButtonComponent>
      </ContactDiv>
    </ContactBase>
    );
  };
  
  export default ContactComponent;