export const TopMusic = (props)=>{
    return(
        <>
         <div className="listMusic">
           
                {props.list.map((item,index)=>{
                 return(
                 <div className='divListMusic' key={index} >
                    <p>{item.title}</p>
                    <p>{item.image}</p>
                    <p>{item.duration}</p>
                 </div>)
                })}
           
         </div>
        </>
    )
}