import React from 'react'
import { Link } from 'react-router-dom'
import './Datadropdown.css'

function Datadropdown() {
  return (
    <div className='datadrop'>
        <div className='datadrop1'>   
            <li><h4>Data services</h4></li>
            <li><Link to={"/Datacollection"}>Data collection services</Link></li>
            <li><Link to={"/Dataextraction"}>Data Extraction Services</Link></li>
            <li><Link to={"/Datmining"}>Data Mining Services</Link></li>
            <li><Link to={"/Listbuiding"}>List Building Services</Link></li>
            
            
        </div>
        <div className='datadrop2'>   
        <li><h4> Marketing & Sales Support</h4></li>
            <li><Link to={"/DocDataentryservice"}>Document Data entry service</Link></li>
            <li><Link to={"/Formentry"}>Forms Data Entry Services</Link></li>
            <li><Link to={"/Productentry"}>Product Data Entry Services</Link></li>
            <li><Link to={"/Mailinglistdataentry"}>Mailing Lists Data Entry Services</Link></li>
            <li><Link to={"/Salessupport"}>Marketing & Sales Support</Link></li>
            <li><Link to={"/Mailingcomplaint"}>Mailing List Compilation Services</Link></li>
            <li><Link to={"/Contactentry"}>Contact Discovery Services</Link></li>
            <li><Link to={"/CRMentry"}>CRM Data Entry Services</Link></li>
            
        </div>
        <div className='datadrop3'>   
        <li><h4> Word Processing & Formatting Services</h4></li>
            <li><Link to={"/Formprocess"}>Forms Processing Services</Link></li>
            <li><Link to={"/Marketresearch"}>Market Research Data Processing Services</Link></li>
            <li><Link to={"/Invoiceprocess"}>Invoice Processing Services</Link></li>
            <li><Link to={"/Surveyprocess"}>Survey Data Processing</Link></li>
            <li><Link to={"/Wordprocess"}>Word Processing & Formatting Services</Link></li>
            <li><Link to={"/BPO"}>Business Process Outsourcing (BPO)</Link></li>
            <li><Link to={"/HealthBPO"}>Healthcare BPO</Link></li>
            <li><Link to={"/MortageBPO"}>Mortgage BPO </Link></li>
            
            
        </div>


    </div>
    
  )
}

export default Datadropdown