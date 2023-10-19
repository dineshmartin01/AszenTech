import React from 'react'
import './CardEcomservice.css'
import { Ecomservices } from '../../../content'
function CardEcomservice() {
  return (
    <>
    {Ecomservices.map(({title , desc,img})=>{
        return(
            <div className='CardEcomservice'>
        
        <h1>{title}</h1>
        <p>{desc}</p>
        <img src={img} alt=''/>
    </div>
        )
    }
  )}
    
    </>
  )
}

export default CardEcomservice