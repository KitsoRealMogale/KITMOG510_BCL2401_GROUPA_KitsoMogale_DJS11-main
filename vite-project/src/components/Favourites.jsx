import { useState,useEffect } from "react"

export const Favourites = ()=>{

  useEffect(()=>{

  },[]);

  const shows = localStorage.getItem('shows');

    return (
       <div id='Favourites'>
        
       {
        shows.map(show=>{
          <>
          <p>{show.title}</p>
          <div class='favourite'>
           
            
            

          </div>
          </>
        })
       }
       
       </div>
    )
}