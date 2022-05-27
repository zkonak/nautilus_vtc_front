import { Component } from "react";
import AddressComponent from "../../atoms/Address/AddressComponent";
import { Form, FormInput, FormLink } from "../../atoms/Form/Form";
import { FormButtonComponent } from "../../atoms/Form/FormComponent";
import { TextLight, TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import HeaderComponent from "../../organisms/Header/HeaderComponent";
//import AddressComponent from "../../atoms/Address/AddressComponent";
import imgConfort from "../../../assets/toyotacorolla.png";
import imgLux from "../../../assets/mercedes.png";
import imgVan from "../../../assets/van.png";
import { GammeDetailDiv } from "../../molecules/GammeDetail/GammeDetail";
import { ContactBase } from "../../organisms/Contact/Contact";
import { Base, ReservationImg } from "./Reservation";

class   ReservationConfirm extends Component {

       
render() {
    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Réservation Confirmation</TextLightWithSpace>
       <Form>
        <TextLight>Date Heure</TextLight>
        <TextLight>Address Departure</TextLight>
        <TextLight>Address Destination</TextLight>
        <TextLight>Prix</TextLight>
        <TextLight>Gamme</TextLight>
       <FormButtonComponent label="Aller à Espace Client"></FormButtonComponent>
       
       </Form>
      
      </>);
} 
}
export default ReservationConfirm;