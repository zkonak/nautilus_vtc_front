
import { useEffect, useState } from "react";
import { serviceServices } from "../../../services";
import { service } from "../../../types/service.types";
import { DropDownList } from "./DropDownListStyle";

const DropDownService = (props:any) => {
    const [serviceList, setServiceList] = useState<[]>([]);
    useEffect(() => {
        serviceServices.getService().then((response)=>{
             
             setServiceList(response.data)
            
        });
   
      }, []);
   //

  return (
  <DropDownList onChange={props.onChange}>
  {
      
     serviceList.map((element:service)=>{
       
    //   let carTypeId = {'carTypeId': element.carTypeId};
    //   let carTypeName = {'carTypeName': element.CarType.typeName};
    return <option value={element.id} key={element.id}  >{element.name}-{element.price} €</option>
  
})
  
  }
    </DropDownList>
 
    );
};

export default DropDownService;