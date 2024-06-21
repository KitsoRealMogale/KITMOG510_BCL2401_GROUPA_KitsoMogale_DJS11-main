import { useEffect, useState } from "react"
import { Favourites } from "./Favourites";


export const Audio = (props)=>{

    const [close,setClose] = useState(true);
    const [favouriteEp,setFavouriteEp] = useState([]);
       
    const closeAudio=()=>{
         setClose(false);
         localStorage.setItem('displayAudio',false);
          props.vh('6vh')
    }

    useEffect(()=>{
        
            localStorage.setItem('favourites',localStorage.getItem('favourites'));
        
    },[favouriteEp])

    const favourite = (obj)=>{
        
         let copy = JSON.parse(localStorage.getItem('favourites'));
         copy.push(obj);
         setFavouriteEp(copy);
         localStorage.setItem('favourites',JSON.stringify(copy));
    }
    
    useEffect(()=>{
       setClose(true);
       props.vh('44vh')
    },[props.trg]);

    return(
        <>

                  { 
                     close?
                      <div className='audioDiv'>
                          <div id='audiopic'>
                          <img className="audioimage" src={props.url}/>
                          <p>{props.seasonRef}</p>
                          <button onClick={()=>{props.favourites(props.seasonRef);favourite({'title':props.seasonRef,'seasonNum':props.seasonNum, 'showNum':props.showNum, 'url':props.url})}}>fav</button>
                          </div>
                            <audio src={props.audioSRC} controls/>

                               <button onClick={()=>closeAudio(props.seasonRef)}>close</button>
                        </div>: null
                   }
        </>
    )
}
