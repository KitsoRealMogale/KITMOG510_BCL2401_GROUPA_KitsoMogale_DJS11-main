import { useEffect, useState } from "react"


export const Audio = (props)=>{

    const [close,setClose] = useState(true);
    // const grid = document.getElementById('grid-container');
    // const seasonsDiv = document.getElementById('seasonName');
       
    const closeAudio=()=>{
         setClose(false);
         localStorage.setItem('displayAudio',false);
          props.vh('4vh')
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
                          </div>
                            <audio src={props.audioSRC} controls/>
                               <button onClick={closeAudio}>close</button>
                        </div>: null
                   }
        </>
    )
}