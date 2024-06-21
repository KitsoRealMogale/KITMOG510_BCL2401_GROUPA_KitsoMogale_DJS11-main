import { Link } from "react-router-dom";
import { SelectComponent, SelectGenre } from "./Select"
import { useEffect, useState } from "react";


export const Header = ({select,selectGenre})=>{

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    console.log(value)
    select(selectedValue);
   
  };

  useEffect(()=>{
    selectGenre(selectedGenre);
  },[selectedGenre])

  const handleSelectGenre = (value) =>{
    setSelectedGenre(value);
    
  }

     return (
        <>
          <div id='header'>

            <h2><Link to='/'>Home</Link></h2>
            <h2><Link to='/Favourites'>Favourites</Link></h2>
            <SelectComponent onSelectChange={handleSelectChange}  option1={'A-Z'} option2={'Z-A'}/>
            <SelectGenre onSelectChange={handleSelectGenre}/>
          </div>
        
        </>
     )
}