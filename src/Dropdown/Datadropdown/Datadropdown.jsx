import React from 'react'
import { Link } from 'react-router-dom'
import './Datadropdown.css'

function Datadropdown() {
  return (
    <div className='datadrop'>
        <div className='datadrop1'>   
            <li><h4>Data services</h4></li>
            <li><Link to={"/Datacollection"}>Data collection services</Link></li>
            <li><Link to={"/Datacollection"}>Data Extraction Services</Link></li>
            <li><Link to={"/Datacollection"}>Data Mining Services</Link></li>
            <li><Link to={"/Datacollection"}>List Building Services</Link></li>
            
            
        </div>
        <div className='datadrop2'>   
        <li><h4> Marketing & Sales Support</h4></li>
            <li><Link to={"/DocDataentryservice"}>Document Data entry service</Link></li>
            <li><Link to={"/DocDataentryservice"}>Forms Data Entry Services</Link></li>
            <li><Link to={"/DocDataentryservice"}>Product Data Entry Services</Link></li>
            <li><Link to={"/DocDataentryservice"}>Mailing Lists Data Entry Services</Link></li>
            <li><Link to={"/DocDataentryservice"}>Marketing & Sales Support</Link></li>
            <li><Link to={"/DocDataentryservice"}>Mailing List Compilation Services</Link></li>
            <li><Link to={"/DocDataentryservice"}>Contact Discovery Services</Link></li>
            <li><Link to={"/DocDataentryservice"}>CRM Data Entry Services</Link></li>
            
        </div>
        <div className='datadrop3'>   
        <li><h4> Word Processing & Formatting Services</h4></li>
            <li><Link to={"/Formprocess"}>Forms Processing Services</Link></li>
            <li><Link to={"/Formprocess"}>Market Research Data Processing Services</Link></li>
            <li><Link to={"/Formprocess"}>Invoice Processing Services</Link></li>
            <li><Link to={"/Formprocess"}>Survey Data Processing</Link></li>
            <li><Link to={"/Formprocess"}>Word Processing & Formatting Services</Link></li>
            <li><Link to={"/Formprocess"}>Business Process Outsourcing (BPO)</Link></li>
            <li><Link to={"/Formprocess"}>Healthcare BPO</Link></li>
            <li><Link to={"/Formprocess"}>Mortgage BPO </Link></li>
            
            
        </div>


    </div>
    
  )
}

export default Datadropdown