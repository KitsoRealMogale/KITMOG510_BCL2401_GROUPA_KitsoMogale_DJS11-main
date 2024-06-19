import { useEffect,useState } from "react"
import './Component.css'


export const Seasons = ({id}) =>{

    const [show,setShow] = useState({});
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        
        fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then(res=> res.json())
        .then(data=>{ 
            console.log(data)
            setShow(data)})
            .catch(err=>console.log(err))
    },[])

    const openModel = ()=>{

         setOpen(true)

    }
   
    const closeModel = ()=>{

        setOpen(false)

   }
    
    return(
        <>
        {  

        show.seasons ?
        <>
           <div id='top1'>
           <img className="season-img" src={show.seasons[0].image}/>
           
           
           <h8 id='btnom1' onClick={openModel}>view desc</h8>
           </div>

          { open?
           <div id='modal1'>
             <h3>{show.description}</h3>
             <button onClick={closeModel}>close</button>
           </div>: null
         }

          <div className="grid-container2">
         {
            show.seasons.map(season =>{
                
             return(  
                 <div key={season.season} className="preview-divs" >
                  <h2>  Season {season.season}</h2>
                </div>
             )
            })

         }
         </div>
          </>
          :
          <h1>Loading....</h1>
        }
        </>
    )
}