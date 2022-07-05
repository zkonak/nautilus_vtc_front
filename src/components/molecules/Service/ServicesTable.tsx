

import { useEffect, useState } from 'react';
import {serviceServices } from '../../../services';

import {TableComponent} from '../../atoms/Table/TableComponent';

import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../molecules/Reservation/Dialog';






const ServicesTable = (props:any) => {

  const [data, setData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  let navigate=useNavigate();

  const handleClick=(e:any)=>{
     //navigate("/reservationform/"+e.target.value);

  }
  const annulation=(serviceId:any)=>{
    //const response=serviceServices.deleteService(serviceId);
            
            navigate("/servicesAdmin")
            window.location.reload();


 }



  useEffect(() => {
      
      serviceServices.getService().then((response)=>{
      setColumns([
  
  {
      name: 'Nom',
      selector: (row: { name: any; }) => row.name,
      sortable: true
  },
  {
      name: 'Prix',
      selector: (row: { price: any; }) => row.price,
      sortable: true
  },
  {
    name: 'Gamme',
    selector: (row: { CarType: any; }) => row.CarType.typeName,
    sortable: true
},
 
{
  
  cell:(row:any) => <AlertDialog text="Annuler" value={row.id}  contextText="Vous voulez annuler votre réservation?" handleClick={annulation}/>,
  ignoreRowClick: true,
  allowOverflow: true,
  button: true,
},]);

console.log(response.data)
setData(response.data)

}).catch((error:any) => console.log(error));

 
}, []);

return (<>
     <TableComponent data={data}  columns={columns}/>
    
   
    
    
  
    </>
  );
};

export default ServicesTable;