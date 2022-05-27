
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
//import SortIcon from "@material-ui/icons/ArrowDownward";
import movies from "./movies";
import ButtonComponent, { SmallButtonComponent } from "../Button/ButtonComponent";
import * as FaIcons from 'react-icons/fa' 
import { SearchBar, TableBase, TableButton } from "./Table";


export const TableComponent = ({columns=[
        {
            cell:(row:any) => <TableButton>Annuler</TableButton>,
            ignoreRowClick: true,
    		allowOverflow: true,
    		button: true,
         },
        {
            name: 'Title',
            selector: (row: { title: any; }) => row.title,
            sortable: true
        },
        {
            name: 'Year',
            selector: (row: { year: any; }) => row.year,
            sortable: true
        },
        
    
    ], data= [
            {
                id: 1,
                title: 'Beetlejuice',
                year: '1988',
               
            },
            {
                id: 2,
                title: 'Ghostbusters',
                year: '1984',
                
            },
        ]}) => {
  return (
    <TableBase >
       <SearchBar placeholder="Rechercher.."/>
        <DataTable columns={columns} data={data}        
     
          defaultSortFieldId="title"
          sortIcon={ <FaIcons.FaSortDown />}
          pagination
          
          
         // selectableRows
        />
    
    </TableBase>
  );
}
