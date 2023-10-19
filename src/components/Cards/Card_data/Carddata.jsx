import React from 'react'
import './Carddata.css'
import { Dataservices } from '../../../content'

function Carddata() {
  return (
    <>
    {Dataservices.map(({title,desc,img})=>{
        return(
            <div className='carddata__head'>
       
            <h1>{title}</h1>
            <p>{desc}</p>
<img src={img}/>
</div>
        )
    })}
      
    </>
  )
}

export default Carddata