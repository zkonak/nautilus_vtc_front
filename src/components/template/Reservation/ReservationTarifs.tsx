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

class   ReservationTarifs extends Component {

       
render() {
    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Réservation</TextLightWithSpace>
       <Form>
        <TextLight>Date Heure</TextLight>
        <TextLight>Address Departure</TextLight>
        <TextLight>Address Destination</TextLight>
       
        <GammeDetailDiv>
        <Base>
       <FormInput type='checkbox'  placeholder='Gamme'></FormInput>
       <TextLight>17€</TextLight>
       <ReservationImg src={imgConfort}/>
      </Base>
      
      <Base>
       <FormInput type='checkbox'  placeholder='Gamme'></FormInput>
       <TextLight>25€</TextLight>
       <ReservationImg src={imgLux}/>
      </Base>
       
      <Base>
       <FormInput type='checkbox'  placeholder='Gamme'></FormInput>
       <TextLight>40€</TextLight>
       <ReservationImg src={imgVan}/>
      </Base></GammeDetailDiv>
      
       <FormButtonComponent label="Valider"></FormButtonComponent>
        
       </Form>
      
      </>);
} 
}
export default ReservationTarifs;