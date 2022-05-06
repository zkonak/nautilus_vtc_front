
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import FooterComponent from '../../organisms/Footer/FooterComponent';
import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
const SignUp = () => {
  return (<>
      <HeaderComponent/>
      <TextLightWithSpace>Se Connecter</TextLightWithSpace>
     <Form>
      <FormInput type='mail'  placeholder='E-Mail'></FormInput>
      <FormInput type='password'  placeholder='Mot de Pass'></FormInput>
      <FormButtonComponent label="Se Connecter"></FormButtonComponent>
      <FormLink href="/Login">Créer Mon Compte..</FormLink>
     </Form>
     
    </>
  );
};

export default SignUp;