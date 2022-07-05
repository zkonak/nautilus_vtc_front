

import { useEffect, useState } from 'react';
import { paymentServices, reservationServices } from '../../../services';
import { TableButton } from '../../atoms/Table/Table';
import {TableComponent} from '../../atoms/Table/TableComponent';
import * as FaIcons from 'react-icons/fa' 
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../molecules/Reservation/Dialog';
import {APP_PORT} from "../../../utils/env"
import axios from 'axios';




const ReservationList = (props:any) => {

  const [data, setData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  let navigate=useNavigate();

  const handleClick=(e:any)=>{
     navigate("/reservationform/"+e.target.value);

  }
  const annulation=(reservationId:any)=>{
    const response=reservationServices.deleteReservation(reservationId);
            
            navigate("/dashboard")
            window.location.reload();


 }

 const downloadFacture=async(e:any)=>{
  
  // paymentServices.downloadFacture(e.target.value).then(response=>response.blob()).then(blob=>{
  //     console.log(blob)
  //   const file = new Blob([blob],{ type: 'application/pdf' });
  //   saveAs(file, 'fileName.pdf');

   // })
   axios.post(APP_PORT+"/payment/download/",
        {
          "paymentId" :e.target.value
        },
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf',
                'Authorization' : `Bearer ${localStorage.getItem("access-token")}`
            }
           
        })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'facture.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));
 
 

  
    //navigate("/dashboard")


}

  useEffect(() => {
      const userId=localStorage.getItem("userId");
      reservationServices.getReservationByUser(userId).then((response)=>{
      let data={};  
      if(props.history){
      
            data=response.data.filter((element:any)=>(!element.Payment))
     
          
           
   
 
     
 setColumns([
  
  {
      name: 'Date de Reservation',
      selector: (row: { createdAt: any; }) => row.createdAt.toString().substring(0,10),
      sortable: true
  },
  {
      name: 'Date de Depart',
      selector: (row: { dateDepart: any; }) => row.dateDepart.toString().substring(0,10),
      sortable: true
  },
  {
    name: 'Address Depart',
    selector: (row: { addressDepart: any; }) => row.addressDepart,
    sortable: true
},
{
  name: 'Address Destination',
  selector: (row: { addressDestination: any; }) => row.addressDestination,
  sortable: true
},
{
  name: 'Prix',
  selector: (row: { price: any; }) => row.price+"€",
  sortable: true
},
 
{
  
  cell:(row:any) => <AlertDialog text="Annuler" value={row.id}  contextText="Vous voulez annuler votre réservation?" handleClick={annulation}/>,
  ignoreRowClick: true,
  allowOverflow: true,
  button: true,
},]);

}
else{
  data=response.data.filter((element:any)=>element.Payment)

  setColumns([
  
    {
        name: 'Date de Reservation',
        selector: (row: { createdAt: any; }) => row.createdAt.toString().substring(0,10),
        sortable: true
    },
    {
        name: 'Date de Depart',
        selector: (row: { dateDepart: any; }) => row.dateDepart.toString().substring(0,10),
        sortable: true
    },
    {
      name: 'Address Depart',
      selector: (row: { addressDepart: any; }) => row.addressDepart,
      sortable: true
  },
  {
    name: 'Address Destination',
    selector: (row: { addressDestination: any; }) => row.addressDestination,
    sortable: true
  },
  {
    name: 'Prix',
    selector: (row: { price: any; }) => row.price+"€",
    sortable: true
  },
   
  {
    
    cell:(row:any) => <TableButton value={row.Payment.id} onClick={downloadFacture}>Facture</TableButton>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },]);
}
setData(data)
// setData([
//       {
//           id: 1,
//           title: 'Beetlejuice',
//           year: '1988',
         
//       },
//       {
//           id: 2,
//           title: 'Ghostbusters',
//           year: '1984',
          
//       },
//   ]);
}).catch((error:any) => console.log(error));

 
}, []);






  return (<>
     
      
     <TableComponent data={data}  columns={columns}/>
    
   
    
    
  
    </>
  );
};

export default ReservationList;