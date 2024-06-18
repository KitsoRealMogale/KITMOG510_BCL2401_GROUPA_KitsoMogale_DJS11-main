import { useEffect, useState }  from "react"
import React from "react";

export const Body = () => {

    const [data,setdata] = useState([]);
    
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
    
    return(
        <>
        {data.length > 0 &&
          <div className='preview_div'>
            <img src={`${data[0].image}`} />
            <p className='preview_Title'>Title: {data[0].title}</p>
            <p className='preview_Title'>Seasons: {data[0].seasons}</p>
            <p className='preview_Title'>Genre Titles: {data[0].genres[0]}</p>
          </div>
}
        </>
    )
}