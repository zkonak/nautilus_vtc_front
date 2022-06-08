import {  useState } from "react";
import AddressComponent from "../../atoms/Address/AddressComponent";
import { Form, FormInput } from "../../atoms/Form/Form";
import { FormButtonComponent } from "../../atoms/Form/FormComponent";
import { TextLightWithSpace } from "../../molecules/ServiceTitle/ServiceTitle";
import HeaderComponent from "../../organisms/Header/HeaderComponent";
import { saveLocal } from "../../../store/actions/reservation.action";
import { useDispatch, useSelector } from "react-redux";
import { userStore } from "../../../types/user.types";
import { useNavigate } from "react-router-dom";
//import AddressComponent from "../../atoms/Address/AddressComponent";

const ReservationForm = () => {

    let navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const [date, setDate] = useState<Date>();
    const [hour, setHour] = useState<string>("");
    const [addressDepart, setAdressDepart] = useState<string>("");
    const [addressDepartCoord, setAdressDepartCoord] = useState<string>("");
    const [addressDestinationCoord, setAdressDestinationCoord] = useState<string>("");
    const [addressDestination, setAdressDestination] = useState<string>("");
    const userState = useSelector((state: { user: userStore }) => state.user);
    function validateHhMm(inputField:string) {
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField);
        return isValid;
      }
  
    const handleClick = async () => {
      
        try {
             
           
            const reservation ={dateDepart:date,
                timeDepart:hour,
                addressDepart:addressDepart,
                addressDestination:addressDestination,
                price:0,
                tax:0,
                priceKm:0,
                packageService:"",
                dateDestination:date,
                timeDestination:undefined,
                CarTypeId:0,
                UserId:undefined,
                ServiceId:undefined,
                PackageId:undefined
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
        {/* <FormInput type='ComboBox'  placeholder='Gamme'></FormInput> */}
        <FormInput type='date'  placeholder='Date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))}></FormInput>
        <FormInput type='combobox' placeholder='Heure' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHour(e.target.value)}></FormInput>
        <AddressComponent type='text'  label='Address Departure' onChange={(value:any) => {setAdressDepart(value.name); setAdressDepartCoord(value.id)}}></AddressComponent>
        <AddressComponent type='text' label='Address Destination' onChange={(value:any) => {setAdressDestination(value.name);setAdressDestinationCoord(value.id)}}></AddressComponent>
        <FormButtonComponent label="Créer Mon Compte" handleClick={handleClick}></FormButtonComponent>
        
       </Form>
      
      </>);

}
export default ReservationForm;


