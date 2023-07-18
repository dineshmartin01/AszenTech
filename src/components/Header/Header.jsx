import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { mail } from "../../assets/commonSvg";
import login from "../../assets/images/login.png";
import {FaBars} from "react-icons/fa"
import{ImCross} from 'react-icons/im'

function Header(){
        const [Mobile , setMobile]= useState(true)
    return(
        <div className="main">
            <div className="head">
                <div className="head1">
                    <div className="call">
                    <div className="call1">{mail}</div>
                    <div className="call2">
                        {/* <span>E-mail</span><br></br> */}
                        <b>aszentech@gmail.com</b>
                    </div>
                    </div>
                </div>
                <div className="head2">
                    <img src="http://www.aszentech.com/cdn/images/logo.png"/>
                </div>
                <div className="head3">
                    <div className="log">
                        <span>About</span>
                    </div><span>|</span>
                    <div className="log1">
                        <span><img src={login}/><b>Login</b></span>
                    </div>
                    <button className="humburger" onClick={()=> setMobile(!Mobile)}>
                    
                    
                    {Mobile ? <ImCross/> :<FaBars/>}
                    {/* <FaBars/> */}
                </button>
                </div>
            </div>
            <div className="header">
            <div className="header1" >
             <ul className= { Mobile ? "nav-links-mobile" : "nav-links"}onClick={()=>setMobile(false)}>
                <li><Link to="/"> Data</Link></li>
                <li><Link to={"/Ecommerce"}>Ecommerce</Link></li>
                <li><Link to={"/Publishing"}>E-publishing</Link></li>
                <li><Link to={"/Web"}> Apps & Web</Link></li>
                <li><Link to={"/Photoediting"}>Photo Editing</Link> </li>
                <li><Link to={"/Digitalmarketing"}>Digital Marketing</Link></li>
                </ul>
             </div>   
             <div className="header2">
             <div className="header2-1">
                    <div className="header2-1-1">
                        <span>About</span>
                    </div>
                    <div className="header2-1-2">
                        <span><img src={login}/><b>Login</b></span>
                    </div>
               
             </div>
             </div>
            </div>
            
        </div>
    )
}
export default Header;