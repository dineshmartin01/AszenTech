import React from "react";
import './Photoediting.css';
import Header from "../Header/Header";
import Ourclient from "../Our Client/Ourclient";
import Footer from "../Footer/Footer";
function Photoediting(){
    return(
        <div>
                <div><Header/></div>

                <Ourclient/>
                <Footer/>
        </div>
    )
}
export default Photoediting;