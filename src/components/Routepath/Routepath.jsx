import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contactentry from '../Headercontent/Datacontent/Dataentryservice/Contactentry/Contactentry'
import CRMentry from '../Headercontent/Datacontent/Dataentryservice/CRMentry/CRMentry'
import DocDataentryservice from '../Headercontent/Datacontent/Dataentryservice/DocDataentryservice/DocDataentryservice'
import Formentry from '../Headercontent/Datacontent/Dataentryservice/Formentry/Formentry'
import Mailingcomplaint from '../Headercontent/Datacontent/Dataentryservice/Mailingcomplaint/Mailingcomplaint'
import Mailinglistdataentry from '../Headercontent/Datacontent/Dataentryservice/Mailinglistdataentry/Mailinglistdataentry'
import Salessupport from '../Headercontent/Datacontent/Dataentryservice/Mar&Salessupport/Mar&Salessupport'
import Productentry from '../Headercontent/Datacontent/Dataentryservice/Productentry/Productentry'
import BPO from '../Headercontent/Datacontent/Dataprocess/BPO/BPO'
import Formprocess from '../Headercontent/Datacontent/Dataprocess/Formprocess/Formprocess'
import HealthBPO from '../Headercontent/Datacontent/Dataprocess/HealthBPO/HealthBPO'
import Invoiceprocess from '../Headercontent/Datacontent/Dataprocess/Invoiceprocess/Invoiceprocess'
import Marketresearch from '../Headercontent/Datacontent/Dataprocess/Marketresearch/Marketresearch'
import MortageBPO from '../Headercontent/Datacontent/Dataprocess/MortageBPO/MortageBPO'
import Surveyprocess from '../Headercontent/Datacontent/Dataprocess/Surveyprocess/Surveyprocess'
import Wordprocess from '../Headercontent/Datacontent/Dataprocess/Wordprocess/Wordprocess'
import Catalogebuilding from '../Headercontent/Ecommercecontent/Productdataentry/Catalogebuilding/Catalogebuilding'
import DataEntry from '../Headercontent/Ecommercecontent/Productdataentry/DataEntry/DataEntry'
import HireEcommerce from '../Headercontent/Ecommercecontent/Productdataentry/HireEcommerce/HireEcommerce'
import Ecomwebsite from '../Headercontent/Ecommercecontent/Productdataentry/Ecomwebsite/Ecomwebsite'
import Orderprocess from '../Headercontent/Ecommercecontent/Productdataentry/Orderprocess/Orderprocess'
import Pricemonitoring from '../Headercontent/Ecommercecontent/Productdataentry/Pricemonitoring/Pricemonitoring'
import EcomBankOff from '../Headercontent/Ecommercecontent/Productdataentry/EcomBankOff/EcomBankOff'




function Routepath() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Contactentry" element={<Contactentry/>}/>
            <Route path="/CRMentry" element={<CRMentry/>}/>
            <Route path="/DocDataentryservice" element={<DocDataentryservice/>}/>
            <Route path="/Formentry" element={<Formentry/>}/>
            <Route path="/Mailingcomplaint" element={<Mailingcomplaint/>}/>
            <Route path="/Mailinglistdataentry" element={<Mailinglistdataentry/>}/>
            <Route path="/Salessupport" element={<Salessupport/>}/>
            <Route path="/Productentry" element={<Productentry/>}/>
            <Route path='/BPO' element={<BPO/>}/>
            <Route path='/Formprocess' element={<Formprocess/>}/>
            <Route path='/HealthBPO' element={<HealthBPO/>}/>
            <Route path='/Invoiceprocess' element={<Invoiceprocess/>}/>
            <Route path='/Marketresearch' element={<Marketresearch/>}/>
            <Route path='/MortageBPO' element={<MortageBPO/>}/>
            <Route path='/Surveyprocess' element={<Surveyprocess/>}/>
            <Route path='/Wordprocess' element={<Wordprocess/>}/>
            <Route path='/Catalogebuilding' element={<Catalogebuilding/>}/>
            <Route path='/ DataEntry' element={< DataEntry/>}/>
            <Route path='/EcomBankOff' element={<EcomBankOff/>}/>
            <Route path='/Ecomwebsite' element={<Ecomwebsite/>}/>
            <Route path='/ HireEcommerce' element={< HireEcommerce/>}/>
            <Route path='/Orderprocess' element={<Orderprocess/>}/>
            <Route path='/Pricemonitoring' element={<Pricemonitoring/>}/>
            
                      
        </Routes>
    </BrowserRouter>
  )
}

export default Routepath