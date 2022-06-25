import {  useEffect, useState } from "react";
import AddressComponent from "../../atoms/Address/AddressComponent";
import { Form, FormInput } from "../../atoms/Form/Form";
import { FormButtonComponent } from "../../atoms/Form/FormComponent";
import { TextLight, TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import HeaderComponent from "../../organisms/Header/HeaderComponent";
import { saveLocal } from "../../../store/actions/reservation.action";
import { useDispatch, useSelector } from "react-redux";
import { userStore } from "../../../types/user.types";
import { useNavigate, useParams } from "react-router-dom";
import { gammeServices, packagesServices, reservationServices, serviceServices } from '../../../services';
import { Base } from "./Reservation";
import DropDownForfait from "../../molecules/Reservation/DropDownList";
import { GammeDetailDiv } from "../../molecules/GammeDetail/GammeDetail";
import DropDownService from "../../molecules/Reservation/DropDownListService";

//import AddressComponent from "../../atoms/Address/AddressComponent";

const ReservationForm = (props:any) => {

    let navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const [date, setDate] = useState<Date>();
    const [hour, setHour] = useState<string>("");
    const [addressDepart, setAdressDepart] = useState<string| null>("");
    const [addressDepartCoord, setAdressDepartCoord] = useState<string>("");
    const [addressDestinationCoord, setAdressDestinationCoord] = useState<string>("");
    const [addressDestination, setAdressDestination] = useState<string| null>("");
    const [type, setType] = useState<string>("1");
    const [packageId, setPackageId] = useState<number| undefined>();
    const [serviceId, setServiceId] = useState<number>();
    const userState = useSelector((state: { user: userStore }) => state.user);
    const params=useParams();

   
//   useEffect(() => {
//     const reservationId = params.reservationId;
//     console.log("reservationId",params)
    
//     if(reservationId){
//        reservationServices.getReservation(parseInt(reservationId)).then(response=>{
          
//           let objectReservation=response.data;
       
          
//     if(objectReservation){
   
//        setDate(objectReservation.dateDepart)
//        setHour(objectReservation.setHour) 
//        setAdressDepart(objectReservation.addressDepart)
//        setType("1")
//        setPackageId(objectReservation.packageId) 
//        setServiceId(objectReservation.serviceId) 
//     }
         
//        })   
      
//     }
    
   
//  } , []);  


    
    function validateHhMm(inputField:string) {
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField);
        return isValid;
      }
  
    const handleClick = async () => {
      
        try {
            
            if(type==="2") setServiceId(0);
            if(type==="3") setPackageId(0);

            
            
            const reservation ={dateDepart:date,
                timeDepart:hour,
                addressDepart:addressDepart,
                addressDestination:addressDestination,
                price:0,
                tax:0,
                priceKm:0,
                packageService:"",
                dateDestination:undefined,
                timeDestination:undefined,
                CarTypeId:0,
                UserId:undefined,
                ServiceId:serviceId,
                PackageId:packageId,
                prices:new Array(),
                distance :0,
                carTypeName:null,
                type:type
            }
          
            if(type==="1"){

       
            const gammeResponse=await gammeServices.getGamme();
            const response=await reservationServices.getReservationCalcul(reservation,gammeResponse.data)
            reservation.distance=10;
            reservation.prices=response.data;
            }
            else if(type==="2"){
               
                const packageResponse=await packagesServices.getPackageOne(packageId);
                const array=[];

                array.push(packageResponse.data)
                const response=await reservationServices.getReservationCalcul(reservation,array)
                
                
                reservation.prices=response.data;
                reservation.addressDepart=packageResponse.data.addressDepart;
                reservation.addressDestination=packageResponse.data.addressDestination;
               
            }
            else if(type==="3"){
               
                const servicesResponse=await serviceServices.getServiceOne(serviceId);
                const array=[];

                array.push(servicesResponse.data)
                const response=await reservationServices.getReservationCalcul(reservation,array)
                reservation.prices=response.data;
                
               
            }
          
            dispatch(saveLocal(reservation));
            navigate('/reservationtarifs');
        } catch (error: any) {
            //setError(true);
            console.log(error)
        }
    }


    return (<>
        <HeaderComponent/>
        <TextLightWithSpace>Réservation</TextLightWithSpace>
         <Form>
         <GammeDetailDiv>
        <FormInput type='radio' value="1"  name="type"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)}></FormInput>
        <TextLight>Transfert(De/Vers)</TextLight>
        <FormInput type='radio' value="2" name="type" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)}></FormInput>
        <TextLight>Forfait</TextLight>
        <FormInput type='radio' value="3" name="type" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setType(e.target.value)}></FormInput>
        <TextLight>Mis à Disposition</TextLight>
        </GammeDetailDiv>
      {

    
          (type==="1")?(
      
      
      <>
        <FormInput type='date'  placeholder='Date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))}></FormInput>
        <FormInput type='combobox' placeholder='Heure' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHour(e.target.value)}></FormInput>
        <AddressComponent type='text'  label='Address Departure' onChange={(value:any) => {setAdressDepart(value.name); setAdressDepartCoord(value.id)}}></AddressComponent>
        <AddressComponent type='text' label='Address Destination' onChange={(value:any) => {setAdressDestination(value.name);setAdressDestinationCoord(value.id)}}></AddressComponent>
          
        </>) :
         (type==="2")?(
         <>
         <FormInput type='date'  placeholder='Date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))}></FormInput>
         <FormInput type='combobox' placeholder='Heure' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHour(e.target.value)}></FormInput>
         <DropDownForfait  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{setPackageId(parseInt(e.target.value)); setAdressDestination(e.target.getAttribute('data-address-destination'));setAdressDepart(e.target.getAttribute('data-address-depart'))}}></DropDownForfait>
          
         </>) :

            <>
            <FormInput type='date'  placeholder='Date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))}></FormInput>
            <FormInput type='combobox' placeholder='Heure' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHour(e.target.value)}></FormInput>
            <AddressComponent type='text'  label='Address Departure' onChange={(value:any) => {setAdressDepart(value.name); setAdressDepartCoord(value.id)}}></AddressComponent>
            <DropDownService onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{setServiceId(parseInt(e.target.value));}}></DropDownService>
        
            </>
         }
        
      
        <FormButtonComponent label="Réserver" handleClick={handleClick}></FormButtonComponent>
        
       </Form>
      
      </>);

}
export default ReservationForm;


