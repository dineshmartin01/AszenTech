import React from 'react'
import './Cardecommanagement.css'

function Cardecommanagement({title,desc,img}) {
  return (
    <>   
    {/* {Ecommanagement.map(({title,desc,img})=>{
     return(
     <div className='Cardecommanagement'>
        
        <h1>{title}</h1>
        <p>{desc}</p>
        <img src={img}/>
        </div>
              )
            })
           }
     */}`
     <div  className='Cardecommanagement'>

     <h1>{title}</h1>
        <p>{desc}</p>
        <img src={img}/>
        </div>
    </>
  )
}

export default Cardecommanagement