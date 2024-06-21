import { useEffect, useState }  from "react"
import React from "react";
import {Link} from 'react-router-dom'

export const Body = ({postData,css,value}) => {

    const [data,setdata] = useState([]);
    const [sort,setSort] = useState()
    
    useEffect( ()=>{

        fetch('https://podcast-api.netlify.app')
        .then(res=>{
           return res.json()})
        .then(data=>
            setdata(data)
        )
        .catch(err=>{
            console.log(err)})
  
        
    },[])

    useEffect(()=>{
         const div = document.getElementById('grid-container');
         div.style.top = css;
    },[css]);


    useEffect(()=>{
        setSort(value);
    },[value]);



    if(data.length > 0){
        if(sort == 'Option 1'){
        data.sort(function(a, b){
        if(a.title < b.title) { return 1; }
        if(a.title > b.title) { return -1; }
        return 0;}
        
    );
  }
  else{
    data.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;}
        
    );
  }

}



const clickHandler = (dataToPost)=>{

    postData(dataToPost)

}
    return(
        <div id="grid-container">
        
        {data.length > 0 &&
      <> 
       { data.map(show=>
          <div className='preview_div' key={show.id}>
            <img src={`${show.image}`} />
            <div className="info">
              <p className='preview_Info'>Title: {show.title}</p>
              <p className='preview_Info'>Seasons: {show.seasons}</p>
              <Link to={show.id} onClick={()=>{clickHandler(show.id)}}>open</Link>
            </div>
          </div>)
       }
      </>
     }        
        </div>
    )
}

