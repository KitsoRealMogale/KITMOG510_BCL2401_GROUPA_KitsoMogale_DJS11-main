import { useEffect,useState } from "react"
import './Component.css'


export const Seasons = ({id}) =>{

    const [show,setShow] = useState({});
    const [open,setOpen] = useState(false);
    const [openEp,setOpenEp] = useState(false);
    const [ episodes,setEpisodes] = useState();
    const [openAudio,setopenAudio] = useState(false);
    const [audioJSX,setAudioJSX] = useState();

    useEffect(()=>{
        
        fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then(res=> res.json())
        .then(data=>{ 
            console.log(data)
            setShow(data)})
            .catch(err=>console.log(err))
    },[]);

    const openModel = ()=>{

         setOpen(true)

    };
   
    const closeModel = ()=>{

        setOpen(false)

   };

   const play = (url,id)=>{
    console.log('ok');

    let copy = <div id={id} className='audioDiv'>
                   <audio id='audio' src={url} controls/>
                </div> 

    setAudioJSX(copy);
    setopenAudio(true);
    
   }

   const openEpisodes= (id)=>{
    
    console.log('ghvchsc bjsc j')
    let theOne;
    theOne = show.seasons.filter(item=>{
      
      return  item.season == id;
    });
   
     setEpisodes(<div  id='episodes'>
                   
                  {theOne[0].episodes.map(epi=>{
                  return(  <div key={epi.episode} className='episode'>
                      <p> {epi.title}</p> 
                      <button onClick={()=>{play(epi.file,epi.title)}} >play</button>
                    </div>)
                  })}

                  <button onClick={()=>setOpenEp(false)}>close</button>
                  

                </div>)
     setOpenEp(true);
     
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

               {  
                    openEp? episodes : null
                   }

                {
                    openAudio? audioJSX : null
                }

          <div className="grid-container2">
         {
            show.seasons.map(season =>{
                
             return(  
                 <div key={season.season} className="preview-divs" >
                  <h2>  Season {season.season}</h2>
                  <button onClick={()=>openEpisodes(season.season)}>open</button>

                
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