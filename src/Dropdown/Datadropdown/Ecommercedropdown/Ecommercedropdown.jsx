import React from 'react'
import './Ecommercedropdown.css'
import { Link } from 'react-router-dom'

function Ecommercedropdown() {
  return (
    <div className='Ecomdrop'>
        <div className='Ecomdrop1'>   
            <li><h4><Link to={"/Ecomprodentry"}>Product Data Entry Services</Link></h4></li>
            <li>Data entry</li>
            <li>Product data management</li>
            <li>E-commerce website</li>
            <li>Catalog building</li>
            <li>E-Commerce Back Office Support</li>
            <li>Order Processing Services</li>
            <li>Price Monitoring Services</li>
            <li>Hire eCommerce Virtual Assistants </li>
        </div>
        <div className='Ecomdrop2'>   
        <li><h4><Link to={'/Ecomprodmanagment'}>Product Data Management Services</Link></h4></li>
            <li>Product Data Classification Services</li>
            <li>SKU Development Services</li>
            <li>Taxonomy Development Services</li>
            <li>Product Data Cleansing Services</li>
            <li>Product Matching & De-duplication Services</li>
            <li>Product Data Enrichment Services</li>
            <li>Product Data Standardization Services</li>
            <li>Product Data Normalization Services</li>
            <li>Data Migration Services</li>
            <li>Product Categorization Services</li>
            
        </div>
        <div className='Ecomdrop3'> 
             <li>Product Description Writing Services</li>
            <li>UNSPSC Data Classification Services</li>
            <li>Catalog Management Services</li>
            <li>Catalog Management Services</li>  
        <li><h4> <Link to={'/Ecomcataloge'}> Catalog Building Services</Link></h4></li>
            <li> Image Editing Services</li>
            <li>Updating & Maintenance Services</li>
            <li>Content Management Services</li>
            <li>Content Revolution, AI Powered</li>
            
        </div>


    </div>
  )
}

export default Ecommercedropdown