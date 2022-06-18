import { Component, ReactChild, ReactFragment, ReactNode, ReactPortal, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { saveLocal } from "../../../store/actions/reservation.action";
import { useNavigate } from "react-router-dom";
import { gammeServices } from "../../../services";

const ReservationTarifs = () => {
   
    const [carTypeId, setCarTypeId] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    let navigate = useNavigate(); 
    const dispatch = useDispatch()
    const reservationState = useSelector((state: { reservation: reservationStore }) => state.reservation);
    var prices =reservationState.reservation?.prices;
    console.log(prices)
    // const gammeResponse=await gammeServices.getGamme();
    
    // if(prices!==undefined)
    // prices.forEach((element:any) => {
    //     if(reservationState.reservation!==null && reservationState.reservation?.distance!==null && reservationState.reservation?.distance!==undefined){
    //        element.price= element.priceKm * reservationState.reservation?.distance;
      
      
    //     }
    // }); 


  

/*
    if( reservationState.reservation?.prices!==undefined)
    reservationState.reservation?.prices.forEach((element:any) => {
        if(element.typeName==="CONFORT"){
             priceConfort=element.priceKm;
             idConfort=element.carTypeId;
        }
       
        else if(element.typeName=="LUXE"){
             priceLuxe=element.priceKm;
             idLuxe=element.carTypeId;
        }
       
        else if(element.typeName=="VAN"){
             priceVan=element.priceKm;
             idVan=element.carTypeId
        }
       
    });

  */
   
    const handleClick = async () => {
    if(reservationState.reservation){
       
    // const response = await gammeServices.getGammeOne(carTypeId)
     reservationState.reservation.CarTypeId=carTypeId;
     reservationState.reservation.price=price;
     reservationState.reservation.tax=price*0.10;
     
     
     dispatch(saveLocal(reservationState.reservation));
    }
        navigate('/reservationconfirm');
    } 

     
    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Réservation</TextLightWithSpace>
       <Form>
        <TextLight>Date :{reservationState.reservation?.dateDepart?.toISOString().substring(0, 10)} Heure:{reservationState.reservation?.timeDepart}</TextLight>
        <TextLight>Address Departure:{reservationState.reservation?.addressDepart}</TextLight>
        <TextLight>Address Destination:{reservationState.reservation?.addressDestination}</TextLight>
        <GammeDetailDiv>
     {  
          prices?.map((item:any)=>{
              return(
            <Base>
            <TextLight>{item.typeName?item.typeName:item.CarType.typeName}</TextLight>
           <FormInput type='radio' name="carTypeId" value={item.CarTypeId}  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ setCarTypeId(parseInt(e.target.value));setPrice(parseInt(item.price)); }} placeholder='Gamme'></FormInput>
           <TextLight>{item.price} €</TextLight>
           <ReservationImg src={imgConfort}/>
          </Base>)

          })
       
     }
 



       
        {/* <Base>
        <TextLight>CONFORT</TextLight>
       <FormInput type='radio' name="carTypeId" value={idConfort}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarTypeId(parseInt(e.target.value))} placeholder='Gamme'></FormInput>
       <TextLight>{priceConfort}</TextLight>
       <ReservationImg src={imgConfort}/>
      </Base>
      
      <Base>
      <TextLight>LUXE</TextLight>
       <FormInput type='radio' name="carTypeId"  value={idLuxe}   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarTypeId(parseInt(e.target.value))} placeholder='Gamme'></FormInput>
       <TextLight>{priceLuxe}</TextLight>
       <ReservationImg src={imgLux}/>
      </Base>
       
      <Base>
      <TextLight>VAN</TextLight>
       <FormInput type='radio' name="carTypeId" value={idVan}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCarTypeId(parseInt(e.target.value))} placeholder='Gamme'></FormInput>
       <TextLight>{priceVan}</TextLight>
       <ReservationImg src={imgVan}/>
      </Base>*/}
      </GammeDetailDiv> 
      
       <FormButtonComponent label="Valider" handleClick={handleClick}></FormButtonComponent>
        
       </Form>
      
      </>);

}
export default ReservationTarifs;
