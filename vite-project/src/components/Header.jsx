import { SelectComponent } from "./Select"
import { useState } from "react";


export const Header = ({select})=>{

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    console.log(value)
    select(selectedValue);
   
  };

     return (
        <>
          <div id='header'>

            <h2>Home</h2>
            <h2>Favourites</h2>
            <SelectComponent onSelectChange={handleSelectChange}  option1={'A-Z'} option2={'Z-A'}/>
          </div>
        
        </>
     )
}