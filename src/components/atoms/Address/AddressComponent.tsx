
import React, { useState } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from "axios";


const AddressComponent =  (props: any)  => {
  const [options, setOptions] = useState<{"id":string,"name":string}[]>([]);
  const [selected, setSelected] = useState<{"id":string,"name":string}>();
  
  const onInputChange = async (event:any, value:any, reason:any) => {
    if (value) {
       console.log(value.id)
       axios.get("https://api-adresse.data.gouv.fr/search/?q="+value.split(" ").join("+")+"&limit=50")
       .then(res => {
        var array:{"id":string,"name":string}[] = [] 
          res.data.features.map((item:any)=>{
              array.push({"id":item["geometry"]["coordinates"].join(';'),"name":item["properties"]["label"]})
          
            })
          setOptions(array)
           
         });
    } else {
      setOptions([]);
    }
  };
  const onChange =  (event:any, value:any, reason:any) => {
        console.log(value)
          setSelected(value)
          props.onChange(value)
 };

  return (<Autocomplete
    id="disabled-options-demo"
    options={options}
    onInputChange={onInputChange}
    getOptionLabel={(option) => option.name}//<--
    style={{ width:"50%",padding:"1%",margin:"0.7%"}}
    renderInput={(params) => <TextField {...params} label={props.label} />}
    value={selected}
    onChange={onChange}
    getOptionSelected={(option, value) => option.name === value.name }
  />)

}


export default AddressComponent;