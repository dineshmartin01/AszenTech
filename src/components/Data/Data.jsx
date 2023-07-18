import React from "react";
import './Data.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Global from "../../assets/images/global.jpg";
import Allservices from "../All services/Services";
import Tesimonial from "../Testimonial/Testimonial";
import Ourclient from "../Our Client/Ourclient";

function Data(){
    return(
        <div>
            <Header/>
            <div className="services">
                    <div className="services1">
                        <h1>Multi- Process IT Outsourcing Services</h1>
                        <span>Full spectrum of IT Outsourcing & Business Process Management Services</span>
                        <button>Contact us</button>
                    </div>
            </div>

            {/* <div className="rated">
                    <p>
                    Rated among India's best multi-process IT outsourcing companies, SunTec India has a growing global presence with over 8530 clients from 50 countries, over 1,500 full-time employees and 8 development centers in New Delhi, India. To give our clients a definite competitive edge, and
                     to ensure that our service offerings exceed their expectations, we continuously refine and perfect our processes.
                    </p>
            </div> */}
                <div>
                    <Allservices/>
                </div>
            {/* <div className="allservices">
                    <div className="all-services">
                        <h1>All Services </h1>
                        
                    </div>
                    <div className="all-services1">
                        <div className="all-services-data">
                            <div className="all-services-data1">
                                <h1>Data</h1>
                                <img src="https://cdn-icons-png.flaticon.com/512/4233/4233415.png"/>
                            </div>
                            <div className="all-services-data2">
                                <p>
                                SunTec helps you manage your organizational data through its entire lifecycle. 
                                From data capturing, extraction, inputting & processing to data quality management and analysis.
                                </p>
                            </div>
                            <span className="all-services-data3"><img src="https://cdn-icons-png.flaticon.com/512/892/892662.png"/></span>
                        </div>
                        <div className="all-services-eCommerce">
                            <div className="all-services-eCommerce1">
                                <h1>eCommerce</h1>
                                <img src="https://cdn-icons-png.flaticon.com/512/4233/4233415.png"/>
                            </div>
                            <div className="all-services-eCommerce2">
                                <p>
                                SunTec helps you manage your organizational data through its entire lifecycle. 
                                From data capturing, extraction, inputting & processing to data quality management and analysis.
                                </p>
                            </div>
                            <span className="all-services-eCommerce3"><img src="https://cdn-icons-png.flaticon.com/512/892/892662.png"/></span>
                        </div>
                        
                        <div className="all-services-ePublishing">
                            <div className="all-services-ePublishing1">
                                <h1>ePublishing</h1>
                                <img src="https://cdn-icons-png.flaticon.com/512/4233/4233415.png"/>
                            </div>
                            <div className="all-services-ePublishing2">
                                <p>
                                SunTec helps you manage your organizational data through its entire lifecycle. 
                                From data capturing, extraction, inputting & processing to data quality management and analysis.
                                </p>
                            </div>
                            <span className="all-services-ePublishing3"><img src="https://cdn-icons-png.flaticon.com/512/892/892662.png"/></span>
                        </div>
                        <div className="all-services-web">
                            <div className="all-services-web1">
                                <h1>App&Web</h1>
                                <img src="https://cdn-icons-png.flaticon.com/512/4233/4233415.png"/>
                            </div>
                            <div className="all-services-web2">
                                <p>
                                SunTec helps you manage your organizational data through its entire lifecycle. 
                                From data capturing, extraction, inputting & processing to data quality management and analysis.
                                </p>
                            </div>
                            <span className="all-services-web3"><img src="https://cdn-icons-png.flaticon.com/512/892/892662.png"/></span>
                        </div>
                        <div className="all-services-PhotoEditing">
                            <div className="all-services-PhotoEditing1">
                                <h1>Photo Editing</h1>
                                <img src="https://cdn-icons-png.flaticon.com/512/4233/4233415.png"/>
                            </div>
                            <div className="all-services-PhotoEditing2">
                                <p>
                                SunTec helps you manage your organizational data through its entire lifecycle. 
                                From data capturing, extraction, inputting & processing to data quality management and analysis.
                                </p>
                            </div>
                            <span className="all-services-PhotoEditing3"><img src="https://cdn-icons-png.flaticon.com/512/892/892662.png"/></span>
                        </div>
                        <div className="all-services-DigitalMarketing">
                            <div className="all-services-DigitalMarketing1">
                                <h1>Digital Marketing</h1>
                                <img src="https://cdn-icons-png.flaticon.com/512/4233/4233415.png"/>
                            </div>
                            <div className="all-services-DigitalMarketing2">
                                <p>
                                SunTec helps you manage your organizational data through its entire lifecycle. 
                                From data capturing, extraction, inputting & processing to data quality management and analysis.
                                </p>
                            </div>
                            <span className="all-services-DigitalMarketing3"><img src="https://cdn-icons-png.flaticon.com/512/892/892662.png"/></span>
                        </div>
                    </div>
                   
            </div> */}
            {/* <div className="our-client">
                            <div className="our-client1">
                                 <h1>Our Clients</h1>                               
                            </div>
                            <div className="our-client2">
                                <img src="https://www.pngitem.com/pimgs/m/610-6102735_our-clients-page-hd-png-download.png"/>
                            </div>
                            
                    </div> */}

                    <div>
                        <Ourclient/>
                    </div>
                    <div><Tesimonial/></div>
                    {/* <div className="testimonial">
                        <div className="testimonial1">
                            <div className="testimonial2"><h1>Testimonial</h1></div>
                            <div className="testimonial3">
                                <div className="testimonial3-1">
                                    <div className="testimonial3-1-1"></div>
                                    <div className="testimonial3-1-2">
                                            <p>A client based in UK wanted someone to help them with their website.
                                                 They were stressed and through recommendation found SunTec.</p>
                                    </div>
                                    <div className="testimonial3-1-3">
                                        <h4>Will Paterson</h4>
                                    </div>
                                </div>
                                <div className="testimonial3-2">
                                <div className="testimonial3-2-1"></div>
                                    <div className="testimonial3-2-2">
                                            <p>A client based in UK wanted someone to help them with their website.
                                                 They were stressed and through recommendation found SunTec.</p>
                                    </div>
                                    <div className="testimonial3-2-3">
                                        <h4>Will Paterson</h4>
                                    </div>
                                </div>
                                <div className="testimonial3-3">
                                <div className="testimonial3-3-1"></div>
                                    <div className="testimonial3-3-2">
                                            <p>A client based in UK wanted someone to help them with their website.
                                                 They were stressed and through recommendation found SunTec.</p>
                                    </div>
                                    <div className="testimonial3-3-3">
                                        <h4>Will Paterson</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        <Footer/>
                    </div>

                   
                   
                    
                    
        </div>
    )
}
export default Data;