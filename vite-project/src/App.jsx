import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { TopMusic } from './components/TopMusic'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const items = [{title:'title1',image:'image',duration:'5:00'},{title:'title2',image:'image2',duration:'5:02'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'},{title:'title3',image:'image3',duration:'6:00'}]

  return (
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
  )
}

export default App
