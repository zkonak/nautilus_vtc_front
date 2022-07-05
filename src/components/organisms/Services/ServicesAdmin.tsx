
import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
import SidebarAdmin from '../../organisms/SideBar/SideBarAdmin';
import { DashboardBase, WelcomeDiv, WelcomeText } from '../../template/User/User';
import DropDownCarTypes from '../../molecules/Reservation/DropDownListCarTypes';
import { useState } from 'react';
import { serviceServices } from '../../../services';
import ServicesTable from '../../molecules/Service/ServicesTable';


const ServicesAdmin = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [CarTypeId, setCarType] = useState(0);

    const handleClick = async (props: any) => {
        const response = await serviceServices.saveService({ name,price,CarTypeId});
         
    }


  return (<>
     
      <DashboardBase>
      <SidebarAdmin/>
      <WelcomeDiv><WelcomeText>Bienvenue admin!</WelcomeText></WelcomeDiv>
      </DashboardBase>
      <TextLightWithSpace>Services</TextLightWithSpace>
     <Form>
    
      <FormInput type='text'  placeholder='Nom' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></FormInput>
      <FormInput type='number'  placeholder='Prix' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(parseInt(e.target.value))}></FormInput>
      <DropDownCarTypes onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarType(parseInt(e.target.value))}></DropDownCarTypes>
      <FormButtonComponent label="Enregistrer" handleClick={handleClick}></FormButtonComponent>
     
     </Form>
     <ServicesTable></ServicesTable>
    
    </>
  );
};

export default ServicesAdmin;