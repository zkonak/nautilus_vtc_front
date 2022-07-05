
import { useEffect, useState } from "react";
import { gammeServices } from "../../../services";
import { gamme } from "../../../types/gamme.types";
import { service } from "../../../types/service.types";
import { DropDownList } from "./DropDownListStyle";

const DropDownCarTypes = (props:any) => {
    const [carList, setCarList] = useState<[]>([]);
    useEffect(() => {
        gammeServices.getGamme().then((response)=>{
             
             setCarList(response.data)
             console.log(response.data)
            
        });
   
      }, []);
   //

  return (
  <DropDownList onChange={props.onChange}>
  {
      
     carList.map((element:gamme)=>{
       
    //   let carTypeId = {'carTypeId': element.carTypeId};
    //   let carTypeName = {'carTypeName': element.CarType.typeName};
    return <option value={element.id} key={element.id}  >{element.typeName}</option>
  
})
  
  }
    </DropDownList>
 
    );
};

export default DropDownCarTypes;