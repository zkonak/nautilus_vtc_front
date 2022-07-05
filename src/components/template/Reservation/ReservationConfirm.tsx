import { Component, useState } from "react";
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
import { useSelector } from "react-redux";
import { reservationStore } from "../../../types/reservation.types";
import { gammeServices, reservationServices } from "../../../services";
import ErrorAlert from "../../atoms/ErrorAlert/ErrorAlert";
import { useNavigate } from "react-router-dom";


const ReservationConfirm = () => {
 
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    let navigate = useNavigate(); 

    const reservationState = useSelector((state: { reservation: reservationStore }) => state.reservation);
    
    let priceTotal=0
    if(reservationState.reservation!=null && reservationState.reservation!==undefined )
    priceTotal = reservationState.reservation?.price + reservationState.reservation?.tax
    console.log(reservationState.reservation)
    
    const getCarTypeName=(carTypeId:any)=>{
        if(reservationState.reservation?.type=="1"){
            const object:any = reservationState.reservation?.prices?.filter((item:any)=>{ 
            return item.id==carTypeId
        })
        console.log(reservationState.reservation?.CarTypeId);
        console.log(carTypeId)
        return object[0].typeName;
        }else{
            return reservationState.reservation?.prices[0].CarType.typeName
        } 


       
        
    }

    const handleClick=()=>{
        try{ 

            const response=reservationServices.saveReservation(reservationState.reservation);
            
            navigate("/dashboard")

        } catch (error: any) {
            setError(true);
            setMessage(error.message)
        }
        

    }


  
    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Envoyér Votre Réservation</TextLightWithSpace>
       <Form>
       <ErrorAlert error={error} setError={setError} message={message} />
        <TextLight>Date :{reservationState.reservation?.dateDepart?.toISOString().substring(0, 10)} Heure:{reservationState.reservation?.timeDepart}</TextLight>
        <TextLight>Address Departure:{reservationState.reservation?.addressDepart}</TextLight>
        <TextLight>Address Destination:{reservationState.reservation?.addressDestination}</TextLight>
        <TextLight>Total Prix(TTC):{priceTotal}</TextLight>
        <TextLight>Gamme:{getCarTypeName(reservationState.reservation?.CarTypeId)}</TextLight>
       <FormButtonComponent label="Envoyer" handleClick={handleClick}></FormButtonComponent>

       
       </Form>
      
      </>);
} 

export default ReservationConfirm;