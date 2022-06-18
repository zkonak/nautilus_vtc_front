

import { useEffect, useState } from 'react';
import { reservationServices } from '../../../services';
import { TableButton } from '../../atoms/Table/Table';
import {TableComponent} from '../../atoms/Table/TableComponent';
import * as FaIcons from 'react-icons/fa' 




const ReservationList = () => {

  const [data, setData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);

  useEffect(() => {
      const userId=localStorage.getItem("userId");
      reservationServices.getReservationByUser(userId).then((response)=>{
       
          
           
   
 
     
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
  cell:(row:any) => <TableButton> <FaIcons.FaExpandAlt /></TableButton>,
  ignoreRowClick: true,
  allowOverflow: true,
  button: true,
},]);
setData(response.data)
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
}); 
}, []);






  return (<>
     
      
     <TableComponent data={data} columns={columns}/>
    
   
    
    
  
    </>
  );
};

export default ReservationList;