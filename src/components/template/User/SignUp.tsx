
import HeaderComponent from '../../organisms/Header/HeaderComponent';
import FooterComponent from '../../organisms/Footer/FooterComponent';
import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
const SignUp = () => {
  return (<>
      <HeaderComponent/>
      <TextLightWithSpace>S'inscrire</TextLightWithSpace>
     <Form>
      <FormInput type='mail'  placeholder='E-Mail'></FormInput>
      <FormInput type='text'  placeholder='Nom'></FormInput>
      <FormInput type='text' placeholder='Prénom'></FormInput>
      <FormInput type='password'  placeholder='Mot de Pass'></FormInput>
      <FormInput type='password' placeholder='Confirmez Mot de Passe'></FormInput>
      <FormInput type='text'  placeholder='Adress'></FormInput>
      <FormInput type='telephone'   placeholder='Tél'></FormInput>
      <FormButtonComponent label="Créer Mon Compte"></FormButtonComponent>
      <FormLink href="/Login">Si vous êtes déjà inscrit cliquer pour se connecter..</FormLink>
     </Form>
    
    </>
  );
};

export default SignUp;