import { Component } from "react";

import { Form, FormInput } from "../../atoms/Form/Form";
import { FormButtonComponent } from "../../atoms/Form/FormComponent";
import { TextLight, TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import HeaderComponent from "../../organisms/Header/HeaderComponent";

import imgConfort from "../../../assets/toyotacorolla.png";
import imgLux from "../../../assets/mercedes.png";
import imgVan from "../../../assets/van.png";
import { GammeDetailDiv } from "../../molecules/GammeDetail/GammeDetail";

import { Base, ReservationImg } from "./Reservation";
import { reservationStore } from "../../../types/reservation.types";
import { useSelector } from "react-redux";

const ReservationTarifs = () => {

    const reservationState = useSelector((state: { reservation: reservationStore }) => state.reservation);
     
    console.log(reservationState)
       

     
    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Réservation</TextLightWithSpace>
       <Form>
        <TextLight>Date :{reservationState.reservation?.dateDepart?.toISOString().substring(0, 10)} Heure:{reservationState.reservation?.timeDepart}</TextLight>
        <TextLight>Address Departure:{reservationState.reservation?.addressDepart}</TextLight>
        <TextLight>Address Destination:{reservationState.reservation?.addressDestination}</TextLight>
       
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
export default ReservationTarifs;