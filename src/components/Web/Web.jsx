import React from "react";
import './Web.css';
import Header from "../Header/Header";
import Ourclient from "../Our Client/Ourclient";
import Footer from "../Footer/Footer";
function Web(){
    return(
        <div>
                <div><Header/></div>
                <Ourclient/>
                <Footer/>
        </div>
    )
}
export default Web;