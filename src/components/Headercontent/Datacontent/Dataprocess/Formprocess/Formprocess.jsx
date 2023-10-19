import React from 'react'
import Header from '../../../../Header/Header'
import Ourclient from '../../../../Our Client/Ourclient'
import Footer from '../../../../Footer/Footer'
import './Formprocess.css'
import Cardprodcess from '../../../../Cards/Card-process/Cardprodcess'


function Formprocess() {
  return (
    <>
     <Header/>
    <div className='Formprocess__head'>
      <h1>Word Processing & Formatting Services</h1>
      <p>Ensuring Data Accuracy and Efficiency</p>
    </div>

    <div className='Formprocess__card'>
    <Cardprodcess/>
    </div>
    

    <Ourclient/>
    <Footer/>
    </>
  )
}

export default Formprocess