import { useEffect, useState } from 'react'
import './App.css'
import { Body } from './components/Body';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Seasons } from './components/Seasons';

function App() {

  const [childData,setChildData] = useState('');

  const dataFromChild = (dataChild) =>{
    setChildData(dataChild)
  }

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index element= {<Body postData={dataFromChild}/>}/>
          <Route path={childData} element= {<Seasons/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

