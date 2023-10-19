import React from 'react'
import './Cardprocess.css'
import { Process } from '../../../content'

function Cardprodcess() {
  return (
    <>
    {Process.map(({title,desc,img})=>{
        return(
            <div className='cardprocess__head'>      
            <h1>{title}</h1>
            <p>{desc}</p>
            <img src={img}/>
            </div>
        )
    })}
    </>
  )
}


export default Cardprodcess