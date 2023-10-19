import React from 'react'
import './Datacollection.css'
import Header from '../../../../Header/Header'
import Carddata from '../../../../Cards/Card_data/Carddata'
import Ourclient from '../../../../Our Client/Ourclient'
import Footer from '../../../../Footer/Footer'


function Datacollection() {
  return (
    <>
    <Header/>
    
      <div className='Datacollection'>
          <h1>Data collection services</h1>
          <p>Professional data collection services that give you access to any data you need.</p>
      </div>

      {/* <div className='datacollection__outsource'>
         <div className='datacollection__outsource1'>
            <h1>Unlocking the Power of Data for Informed Decisions</h1>
            <p>In today's data-driven world, success hinges on having the right information at your fingertips. Our Data Collection Services empower your business to make informed decisions based on accurate and relevant data. From various sources and formats, we gather, organize, and process data efficiently, ensuring you have a comp
etitive edge.
</p>
         </div>
         <div className='datacollection__outsource2'>
          <img src='https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'/>
         </div>
      </div> */}
      <div className='datacollection__card'><Carddata/></div>

      <Ourclient/>

      <Footer/>
      
    </>
  )
}

export default Datacollection