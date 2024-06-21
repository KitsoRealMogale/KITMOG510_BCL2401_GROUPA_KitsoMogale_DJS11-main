import { useEffect, useState } from 'react'
import './App.css'
import { Body } from './components/Body';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Seasons } from './components/Seasons';
import { Favourites } from './components/Favourites';

function App() {

  const [childData,setChildData] = useState('');
  const [trigger,setTrigger] = useState();
  const [css,setCss] = useState();
  const [selValue,setSelValue] = useState();
  const [selectG,setSelectG] = useState();

  const dataFromChild = (dataChild) =>{
    setChildData(dataChild);
    localStorage.setItem('path',dataChild)
  }


  const func = (val)=>{
    let copy = val;
      setTrigger(copy)
  }

  const vh =(obj)=>{
      setCss(obj)
  }

  const selected = (val)=>{
        setSelValue(val);
       
  }

  const selectGenre = (val)=>{
        setSelectG(val)
  }

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element= {<Layout selectGenre={selectGenre} select={selected} vh={vh} trigger={trigger}/>}>
          <Route index element= {<Body genre={selectG} value={selValue} css={css} postData={dataFromChild}/>}/>
          <Route path={localStorage.getItem('path')} element= {<Seasons css={css} func={func}  id={localStorage.getItem('path')}/>}/>
          <Route path='/Favourites' element={<Favourites/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

