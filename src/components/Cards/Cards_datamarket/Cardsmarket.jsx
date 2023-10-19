import React from 'react'
import './Cardsmarket.css'
import { Market } from '../../../content'

function Cardsmarket() {
  return (
    <>
    {Market.map(({title,desc,img})=>{
        return(
            <div className='cardmarket__head'>
       
            <h1>{title}</h1>
            <p>{desc}</p>
<img src={img}/>
</div>
        )
    })}
      
    </>
  )
}

export default Cardsmarket