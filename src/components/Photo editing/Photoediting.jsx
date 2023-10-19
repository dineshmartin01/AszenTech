import React, { useEffect, useState } from "react";
import './Photoediting.css';
import Header from "../Header/Header";
import Ourclient from "../Our Client/Ourclient";
import Footer from "../Footer/Footer";
import Cardphoto from "../Cards/Card_photo/Cardphoto";
import Cardphotoedit from "../Cards/Card_photoedit/Cardphotoedit";
function Photoediting(){
    return(
        <div>
                <div><Header/></div>

                <div className="photo__head">
                    <h1>Enhance Your Product Images with</h1>
                    <h1 className="photo__servic">Expert Photoshop Services</h1>
                </div>
                <div className="photo__creat">
                    <h1>Empower your creation with Shineditz</h1>
                    <p>Shineditz provides top-quality photo editing services including Photoshop clipping path, masking, touch-up, retouching, and more. With a team of experienced designers, 
                        we guarantee 100% quality work at low cost and quick turnaround time.
                         Outsource your picture editing needs to us for cutting-edge results.</p>
                </div>
                <div className="photo__editz">
                    <Cardphoto/>
                    
                </div>
                <div className="photo__image">
                    <h1>The image editing services you need</h1>
                    <p>Experience Personalized and Creative Photo Retouching by our Skilled Editors, Using Innovative Techniques that Produce Standout Results</p>
                </div>
                <div className="photo__cardphotoedit">
                    <Cardphotoedit/>
                </div>
                <div className="photo__apart">
                    <img src="http://shineditz.com/static/media/globe.dbc1d038bb1f6da8ed76.png"/>
                    <div className="photo__apart1">
                        <h1 className="photo__aparthead">See what sets Shineditz apart</h1>
                        <div className="photo__apartinside">
                            <div className="photo__apartbox1">
                                <h1>500+</h1>
                                <h2>Happy Customers</h2>
                            </div>
                            <div className="photo__apartbox2">
                                <h1>99.7%</h1>
                                <h2>On Time Delivery</h2>
                            </div>
                            <div className="photo__apartbox3">
                                <h1>79,000+</h1>
                                <h2>Edited Images</h2>
                            </div>
                            <div className="photo__apartbox4">
                                <h1>100+</h1>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                </div>
                

                <Ourclient/>
                <Footer/>
        </div>
    )
}
export default Photoediting;