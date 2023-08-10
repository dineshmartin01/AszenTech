import React from 'react'
import'./Cardcontainer.css'
import { Link } from 'react-router-dom'

const Cardcontainer = ({img,title,desc}) => {
  return (
    <>
        <div className='Cardcontainer'>
          <img src={img}/>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        
    </>
  )
}


export default Cardcontainer