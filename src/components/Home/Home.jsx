import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Allservices from "../All services/Services";
import Tesimonial from "../Testimonial/Testimonial";
import Ourclient from "../Our Client/Ourclient";



function Home(){
    return(
        <div>
            <Header/>
            <div className="services">
                    <div className="services1">
                        <h1>Multi- Process IT Outsourcing Services</h1>
                        <span>Full spectrum of IT Outsourcing & Business Process Management Services</span>
                        <button><Link to={"/Contact"}>Contact us</Link></button>
                    </div>
            </div>            
                <div>
                    <Allservices/>
                </div>

                <div>
                    <Ourclient/>
                </div>

                <div>
                    <Tesimonial/>
                </div>
                

                <div>
                    <Footer/>
                </div>                   
            </div>
    )
}
export default Home;