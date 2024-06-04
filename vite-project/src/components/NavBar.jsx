import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faBars} from '@fortawesome/free-solid-svg-icons';

export const NavBar = ()=> {

   const [isNavOpen,setIsNaveOpen] = useState(['flex','none']);

   const navBarClose = ()=>{
     
      setIsNaveOpen(['none','block']);
     
   }

   const navBarOpen = () =>{
    setIsNaveOpen(['flex','none']);
   }



    return(
        <div id='ajustments'>
        
        <div id='navContainer'>
        
        <FontAwesomeIcon style={{display:isNavOpen[1],marginBottom:'10px'}} onClick={navBarOpen} id='iconNavOpen' icon={faBars} />
        
        <div id='navBar' style={{display:isNavOpen[0]}}>
            <FontAwesomeIcon onClick={navBarClose} id='iconNavClose' icon={faClose} />
            <span className="spanNav">Home</span>
            <span className="spanNav">Search</span>
            <span className="spanNav">Add Song</span>
            <span className="spanNav">Settings</span>
        </div>
        </div>
        </div>
    )
}