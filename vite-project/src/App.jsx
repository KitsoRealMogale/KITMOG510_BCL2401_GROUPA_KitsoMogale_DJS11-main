import { useEffect, useState } from 'react'
import './App.css'
import {authEndpoint,clientId,redirectUri,response_Type,scopes} from './config'
import { Header } from './components/Header'
import { TopMusic } from './components/TopMusic'
import { NavBar } from './components/NavBar'
import axios from 'axios'

function App() {
  const [token, setToken] = useState('')

  const items = [{title:'title1',image:'image',duration:'5:00'},{title:'title2',image:'image2',duration:'5:02'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'}];


   useEffect(()=>{



    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if(!token && hash){
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

      window.location.hash = '';

      window.localStorage.setItem('token',token);
    }
    
   setToken(token);
    

   },[])


  return (
    <>

    {
      !window.localStorage.getItem('token')?

    <div id='login'>
      <h1>Welcome to Kitso Mogale's Spotify Clone</h1>
      <img src='./src/assets/IMG_20240326_192833.jpg' alt='me'/>
      <br/>
      <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${response_Type}`} >Login to Spotify</a>
    </div>
      :
      <>
       <Header/>
      <NavBar/>
      <div id='body'>
      <div style={{textAlign:'start',color:'green',fontWeight:'bold',fontSize:'30px'}}>
        Top Music
      </div>
      <TopMusic list={items}/>
      <div style={{textAlign:'start',color:'green',fontWeight:'bold',fontSize:'25px'}}>
       Recently Played
      </div>
      <TopMusic list={items}/>
      <div style={{textAlign:'start',color:'green',fontWeight:'bold',fontSize:'30px'}}>
       Top Albums
      </div>
      <TopMusic list={items}/>
      <div style={{textAlign:'start',color:'green',fontWeight:'bold',fontSize:'30px'}}>
        Top Artists
      </div>
      <TopMusic list={items}/>
      </div> 
      </>

    }

    </>
  )
}

export default App
