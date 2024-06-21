import { useEffect, useState } from "react"


export const Audio = (props)=>{

    const [close,setClose] = useState(true);
    const [favouriteEp,setFavouriteEp] = useEffect([]);
       
    const closeAudio=()=>{
         setClose(false);
         localStorage.setItem('displayAudio',false);
          props.vh('6vh')
    }

    useEffect(()=>{
        localStorage.setItem('favourites',favouriteEp)
    },[favouriteEp])

    const favourite = ()=>{

         let copy = [...favouriteEp]
         copy.push()
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
                          <button onClick={favourite}>fav</button>
                          </div>
                            <audio src={props.audioSRC} controls/>

                               <button onClick={()=>closeAudio(props.seasonRef,)}>close</button>
                        </div>: null
                   }
        </>
    )
}