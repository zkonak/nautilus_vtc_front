
import { useEffect, useState } from "react";
import { packagesServices } from "../../../services";
import { packages } from "../../../types/package.types";
import { DropDownList } from "./DropDownListStyle";

const DropDownForfait = (props:any) => {
    const [packageList, setPackageList] = useState<[]>([]);
    useEffect(() => {
        packagesServices.getPackages().then((response)=>{
             
             setPackageList(response.data)
        });
   
      }, []);
   //

  return (
  <DropDownList onChange={props.onChange}>
  {
    
     packageList.map((element:packages)=>{
      let addressDepart = {'data-address-depart': element.addressDepart};
      let addressDestination = {'data-address-destination': element.addressDestination};
    return <option value={element.id} key={element.id} {...addressDepart} {...addressDestination} >{element.addressDepart}-{element.addressDestination}-{element.price} €</option>
  
})
  
  }
    </DropDownList>
 
    );
};

export default DropDownForfait;