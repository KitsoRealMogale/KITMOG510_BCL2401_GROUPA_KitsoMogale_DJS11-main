import { useState,useEffect } from "react"

export const Favourites = (props)=>{

  const [trigger,setTrigger] = useState();
  let filtered = [];

  const shows = JSON.parse(localStorage.getItem('shows'));
  
  const favs = JSON.parse(localStorage.getItem('favourites'));
    let filteredShows = shows.map((show)=>{
       
          let demoFilteredShows = favs.filter((item)=>{
             return  item.showNum === show.title
             

          });

          if(demoFilteredShows.length > 0 ){
            filtered.push(demoFilteredShows);
          }

          return demoFilteredShows.length > 0 ? demoFilteredShows : null
    });
    
    filteredShows = filteredShows.filter(item=> item!= null);
    console.log(filteredShows)
    return (
       <div id='Favourites'>
        
       {
        filteredShows.map(show=>{
          // console.log(show[0].showNum);
         return (
         <div className="containFav">
         <div className="headFav">
          <img className="imgFav" src= {show[0].url}/>
          <h5>{show[0].showNum}</h5>
          <h5>{show[0].seasonNum}</h5>
          </div>
          {  show.map(item=>{
                         console.log(item.title);
                       return( 
                         <div className='favouriteEPISODE'>
                         <p className="pFav">Episode: {item.title}</p>
                      </div>)
          })

        }
          </div>)
        })
       }
       
       </div>
    )
}