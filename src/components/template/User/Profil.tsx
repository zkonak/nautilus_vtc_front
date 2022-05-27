
import HeaderComponent from '../../organisms/Header/HeaderComponent';

import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
import Sidebar from '../../organisms/SideBar/SideBar';
import { DashboardBase } from './User';
const Profil = () => {
  return (<>
      <HeaderComponent/>
      <DashboardBase>
      <Sidebar/>
      </DashboardBase>
      <TextLightWithSpace>Mon Profil</TextLightWithSpace>
     <Form>
      <FormInput type='mail'  placeholder='E-Mail'></FormInput>
      <FormInput type='text'  placeholder='Nom'></FormInput>
      <FormInput type='text' placeholder='Prénom'></FormInput>
      <FormInput type='text'  placeholder='Adress'></FormInput>
      <FormInput type='telephone'   placeholder='Tél'></FormInput>
      <FormButtonComponent label="Enregistrer"></FormButtonComponent>
      <FormLink href="/changepass">Cliquez pour changer votre mot de pass..</FormLink>
     </Form>
    
    </>
  );
};

export default Profil;