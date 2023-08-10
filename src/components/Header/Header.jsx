import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { mail } from "../../assets/commonSvg";
import login from "../../assets/images/login.png";
import {FaBars} from "react-icons/fa"
import{ImCross} from 'react-icons/im'
import Datadropdown from "../../Dropdown/Datadropdown/Datadropdown";
import Ecommercedropdown from "../../Dropdown/Datadropdown/Ecommercedropdown/Ecommercedropdown";
import Epublishingdropdown from "../../Dropdown/Datadropdown/Epublishingdropdown/Epublishingdropdown";
import Appswebdropdown from "../../Dropdown/Datadropdown/Apps-Webdropdown/Apps-webdropdown";
import Photodropdown from "../../Dropdown/Datadropdown/Photodropdown/Photodropdown";
import Digidropdown from "../../Dropdown/Datadropdown/Digidropdown/Digidropdown";


function Header(){
        const [Mobile , setMobile]= useState(false)
    return(
        <div className="main">
            {/* <div className="head">
                <div className="head1">
                    <div className="call">
                    <div className="call1">{mail}</div>
                    <div className="call2">
                        <b>aszentech@gmail.com</b>
                    </div>
                    </div>
                    <div className="head2">
                    <img src="http://www.aszentech.com/cdn/images/logo.png" alt=""/>
                </div>
                </div>
                <div className="head2">
                    <img src="http://www.aszentech.com/cdn/images/logo.png" alt=""/>
                </div>
                <div className="head3">
                    <div className="log">
                        <span>About</span>
                    </div><span>|</span>
                    <div className="log1">
                        <span><img src={login} alt=""/><b>Login</b></span>
                    </div>
                    <button className="humburger" onClick={()=> setMobile(!Mobile)}>
                    
                    
                    {Mobile ? <ImCross/> :<FaBars/>}
                    <FaBars/>
                </button>
                <div className="call">
                    <div className="call1">{mail}</div>
                    <div className="call2">
                        <b>aszentech@gmail.com</b>
                    </div>
                    </div>
                </div>
            </div> */}
            <div className="header__top">
                    <div className="header__logo">
                    <img src="http://www.aszentech.com/cdn/images/logo.png" alt=""/>
                    </div>
                    <div className="header__right">
                     <h6><Link>About</Link></h6>                
                    <span>|</span>   
                    <img src={login} alt=""/>
                    <h5><Link>Login</Link></h5>                  
                    </div>
            </div>
            <div className="header">
            <div className="header1" >
            <ul className="header1-1">
                <li className="header1-1-1"><Link to={"/Data"}>Data</Link>
                <div className="header1-1-1-1">
                     <Datadropdown />
                </div>
                </li>
                <li className="header1-1-1"><Link to={"/Ecommerce"}>Ecommerce</Link>
                <div className="header1-1-1-1">
                     <Ecommercedropdown />
                </div>
                </li>
                <li className="header1-1-1"><Link to={"/Publishing"}>Epublishing</Link>
                <div className="header1-1-1-1">
                     <Epublishingdropdown />
                </div>
                </li>
                <li className="header1-1-1"><Link to={"/Web"}>App&Web</Link>
                <div className="header1-1-1-1">
                     <Appswebdropdown />
                </div>
                </li>
                <li className="header1-1-1"><Link to={"/Photoediting"}>Photo Editing</Link>
                <div className="header1-1-1-1">
                     <Photodropdown />
                </div>
                </li>
                <li className="header1-1-1"><Link to={"/Digitalmarketing"}>Digital Marketing</Link>
                <div className="header1-1-1-1">
                     <Digidropdown />
                </div>
                </li>
            </ul>

             </div>   
             <div className="header2">
             <div className="header2-1">
                    <div className="header2-1-1">
                        <span>About</span>
                    </div>
                    <div className="header2-1-2">
                        <span><img src={login} alt=""/><b>Login</b></span>
                    </div>
               
             </div>
             </div>
            </div>
            
        </div>
    )
}
export default Header;