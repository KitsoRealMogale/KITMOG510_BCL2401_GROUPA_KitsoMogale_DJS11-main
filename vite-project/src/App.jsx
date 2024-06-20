import { useEffect, useState } from 'react'
import './App.css'
import { Body } from './components/Body';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Seasons } from './components/Seasons';

function App() {

  const [childData,setChildData] = useState('');
  const [trigger,setTrigger] = useState();
  const [css,setCss] = useState()

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

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element= {<Layout vh={vh} trigger={trigger}/>}>
          <Route index element= {<Body css={css} postData={dataFromChild}/>}/>
          <Route path={localStorage.getItem('path')} element= {<Seasons css={css} func={func}  id={localStorage.getItem('path')}/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

