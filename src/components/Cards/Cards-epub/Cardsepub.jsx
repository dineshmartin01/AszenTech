import React from 'react'
import './Cardsepub.css'

function Cardsepub({img,title,desc}) {
  return (
    <>
    <div className="Cardsepub__main">

                    <div className="Cardsepub__front">
                       
                     <img src={img}/>
                     <h4>{title}</h4>
                    </div>
                    <div className="Cardsepub__back">
                        <p>{desc}</p>
                    </div>                    
  </div>
    </>
  )
}

export default Cardsepub