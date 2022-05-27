
import HeaderComponent from '../../organisms/Header/HeaderComponent';

import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
import Sidebar from '../../organisms/SideBar/SideBar';
import { DashboardBase, WelcomeDiv, WelcomeText } from './User';
const ChangePass = () => {
  return (<>
    <DashboardBase>
          <Sidebar/>
        <WelcomeDiv><WelcomeText>Bienvenue Zeliha!</WelcomeText></WelcomeDiv>
      
     </DashboardBase>
      <TextLightWithSpace>Changer Mot de Pass</TextLightWithSpace>
     <Form>
     
      <FormInput type='password'  placeholder='Actuel Mot de Pass'></FormInput>
      <FormInput type='password'  placeholder='Nouveau Mot de Pass'></FormInput>
      <FormInput type='password' placeholder='Confirmez Mot de Passe'></FormInput>
      <FormButtonComponent label="Enregistrer"></FormButtonComponent>
     
     </Form>
    
    </>
  );
};

export default ChangePass;