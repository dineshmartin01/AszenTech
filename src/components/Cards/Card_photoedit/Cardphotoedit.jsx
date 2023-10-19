import React from 'react'
import './Cardphotoedit.css'
import { Imgservice } from '../../../content'


function Cardphotoedit() {
 return( 
  <>
    {Imgservice.map(({title,desc,img,bg})=>
    {
        return (
          <div className='cardphotoedit' style={{backgroundImage:bg}}>
              
              <div className='cardphotoedit__1'>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                 
              </div>
              <img src={img}/>
          </div> 
        )
    })}
  </>
 )
  
}


export default Cardphotoedit