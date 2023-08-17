import React from 'react'
import './Cardphoto.css'
import { Creation } from '../../../content'

function Cardphoto() {
  return (
    <>
    {Creation.map(({img , title , desc})=>
    {
      return(
        <div className='cardphoto'>
        <img src={img}/>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      )
    })}
   
     </>
  )
}

export default Cardphoto