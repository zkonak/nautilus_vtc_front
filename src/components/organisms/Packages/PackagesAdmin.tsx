
import {FormInput, FormLink} from '../../atoms/Form/Form';
import {TextLightWithSpace } from '../../molecules/ServiceTitle/ServiceTitle';
import { Form } from '../../atoms/Form/Form';
import { FormButtonComponent } from '../../atoms/Form/FormComponent';
import SidebarAdmin from '../../organisms/SideBar/SideBarAdmin';
import { DashboardBase, WelcomeDiv, WelcomeText } from '../../template/User/User';
import DropDownCarTypes from '../../molecules/Reservation/DropDownListCarTypes';
import { useState } from 'react';
import { packagesServices, serviceServices } from '../../../services';
import ServicesTable from '../../molecules/Service/ServicesTable';
import AddressComponent from '../../atoms/Address/AddressComponent';
import PackageTable from '../../molecules/Packages/PackageTable';


const PackagesAdmin = () => {
    const [name, setName] = useState("");
    const [addressDepart, setAddressDepart] = useState("");
    const [addressDestination, setAddressDestination] = useState("");
    const [price, setPrice] = useState(0);
    const [CarTypeId, setCarType] = useState(0);

    const handleClick = async (props: any) => {
        const response = await packagesServices.savePackage({
            name, addressDepart, addressDestination, price, CarTypeId,
            
        });
         
    }


  return (<>
     
      <DashboardBase>
      <SidebarAdmin/>
      <WelcomeDiv><WelcomeText>Bienvenue admin!</WelcomeText></WelcomeDiv>
      </DashboardBase>
      <TextLightWithSpace>Forfaits</TextLightWithSpace>
     <Form>
    
      <FormInput type='text'  placeholder='Nom' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></FormInput>
      <FormInput type='number'  placeholder='Prix' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(parseInt(e.target.value))}></FormInput>
      <AddressComponent type='text' label='Address Depart' onChange={(value:any) => {setAddressDepart(value.name)}}></AddressComponent>
      
      <AddressComponent type='text' label='Address Destination' onChange={(value:any) => {setAddressDestination(value.name)}}></AddressComponent>
       
      <DropDownCarTypes onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarType(parseInt(e.target.value))}></DropDownCarTypes>
      <FormButtonComponent label="Enregistrer" handleClick={handleClick}></FormButtonComponent>
     
     </Form>
     <PackageTable/>
    
    </>
  );
};

export default PackagesAdmin;