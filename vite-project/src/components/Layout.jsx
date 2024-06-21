import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Audio } from "./Audio"

export default function Layout({trigger,vh,select,selectGenre,favourites}) {


    const [localStore,setStore] = useState();
     
   useEffect(()=>{
    let copy = trigger
        console.log('trigger');
        setStore(copy)
   },[trigger])

   console.log(JSON.parse(localStorage.getItem('displayAudio')));

    return (
        <div className="site-wrapper">
            <Header select={select} selectGenre={selectGenre} />
            { JSON.parse(localStorage.getItem('displayAudio')) && 
                 
                 <Audio favourites={favourites} vh={vh} trg={JSON.parse(localStorage.getItem('displayAudio'))} seasonNum={localStorage.getItem('seasonNum')} showNum={localStorage.getItem('showNum')} url={localStorage.getItem('url')} seasonRef={localStorage.getItem('seasonRef')} audioSRC={localStorage.getItem('audioSRC')}/>
                  
              }
            <main>

                <Outlet />

            </main>
        </div>
    )
}
