
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
//import SortIcon from "@material-ui/icons/ArrowDownward";
import movies from "./movies";
import ButtonComponent, { SmallButtonComponent } from "../Button/ButtonComponent";
import * as FaIcons from 'react-icons/fa' 
import { SearchBar, TableBase, TableButton } from "./Table";
import { useState } from "react";


export const TableComponent = (props:any) => {
    const [search, setSearch] = useState<string>("");
    const [filteredResults, setFilteredResults] = useState([]);

 const searchItems=(searchText:string) => {
      setSearch(searchText);
      if (searchText !== '') {
      const filtered=props.data.filter((item:any) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
    }) 
       console.log(filtered)
       setFilteredResults(filtered)
    }else{
        setFilteredResults(props.data);
    }

 }
   
  
  return (
    <TableBase >
       <SearchBar  value={search} onChange={(e:any)=>searchItems(e.target.value)} placeholder="Rechercher.."/>
        <DataTable columns={props.columns} data={search===''?props.data:filteredResults}        
     
          defaultSortFieldId="title"
          sortIcon={ <FaIcons.FaSortDown />}
          pagination
          
          
          
         // selectableRows
        />
    
    </TableBase>
  );
}
