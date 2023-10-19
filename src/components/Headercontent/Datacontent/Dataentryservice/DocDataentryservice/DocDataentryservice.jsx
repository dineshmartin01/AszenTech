import React from 'react'
import './DocDataentryservice.css'
import Header from '../../../../Header/Header'
import Ourclient from '../../../../Our Client/Ourclient'
import Footer from '../../../../Footer/Footer'
import Cardsmarket from '../../../../Cards/Cards_datamarket/Cardsmarket'

function DocDataentryservice() {
  return (
    <>
      <Header/>
    <div className='Dataentry__head'>
      <h1>Data Entry Services</h1>
      <p>Ensuring Data Accuracy and Efficiency</p>
    </div>
    <div className='Dataentry__card'>
      <Cardsmarket/>
    </div>


      <Ourclient/>
      <Footer/>
    </>
    
  )
}

export default DocDataentryservice