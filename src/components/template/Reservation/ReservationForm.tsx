import { Component } from "react";
import AddressComponent from "../../atoms/Address/AddressComponent";
import { Form, FormInput, FormLink } from "../../atoms/Form/Form";
import { FormButtonComponent } from "../../atoms/Form/FormComponent";
import { TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import HeaderComponent from "../../organisms/Header/HeaderComponent";
//import AddressComponent from "../../atoms/Address/AddressComponent";

class   ReservationForm extends Component {

       
render() {
    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Réservation</TextLightWithSpace>
       <Form>
        <FormInput type='ComboBox'  placeholder='Gamme'></FormInput>
        <FormInput type='date'  placeholder='Date'></FormInput>
        <FormInput type='combobox' placeholder='Heure'></FormInput>
        <FormInput type='text'  placeholder='Address Destination'></FormInput>
        <FormInput type='text' placeholder='Address'></FormInput>
        <FormButtonComponent label="Créer Mon Compte"></FormButtonComponent>
        
       </Form>
      
      </>);
} 
}
export default ReservationForm;