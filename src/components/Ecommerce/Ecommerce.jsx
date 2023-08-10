import React from "react";
import './Ecommerce.css';
import Header from "../Header/Header";
import Ourclient from "../Our Client/Ourclient";
import Footer from "../Footer/Footer";
import Ecommerceslider from "../../Pages/ecommerceslider/ecommerceslider";
import Cardcontainer from "../Cards/Cardcontainer/Cardcontainer";
import { Link } from "react-router-dom";
function Ecommerce(){
    return(
        <div>
                <div><Header/></div>
                

                <div className="ecommerce__head">
                <h1>E-commerce</h1>
                    <div className="ecommerce__tagline">
                        <h1> Elevate Your E-Commerce Experience with Aszen Technologies - Your Trusted Partner for Tailored Solutions and Unmatched Success!</h1>
                    </div>
                    <div className="ecommerce__Services">
                        <h1>Services</h1>
                        <p>At Aszen Technologies, we empower your online business with a diverse range of dynamic E-commerce solutions.
                             From seamless product data entry to innovative catalog building, we are your go-to experts for driving exponential 
                             growth and unparalleled achievements in the digital realm.</p>
                    </div>
                </div>
                <div className="data__content">
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/6533/6533534.png"}
             title={<Link>Product Data Entry Services</Link>}
             desc={"Unleash the potential of your product data with our precision-driven services. Elevate your E-commerce journey with"}
            />

            
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/8386/8386322.png"}
             title={<Link>Product Data Management Services</Link>}
             desc={"Harness the power of structured data with our cutting-edge management services. Elevate your product offerings with"}
            />
            
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/2103/2103384.png"}
             title={<Link>Catalog Building Services</Link>}
             desc={" Captivate your customers with visually stunning catalogs designed to inspire action. Elevate your brand with"}
            />

            </div>
        	    
                              
                <Ecommerceslider/>
                <div className="ecommerce__workflow">
                        <div className="ecommerce__workflow__content">
                                <h1>Workflow of Our E-commerce Services</h1>
                                <p>Experience a seamless journey with our well-structured workflow</p>
                                <div className="ecommerce__workflow__points">
                                    <li>Comprehensive Requirement Analysis to understand your unique needs.</li>
                                    <li>Data Collection & Preparation for a strong foundation.</li>
                                    <li>Efficient Data Entry & Management to keep your business agile.</li>
                                    <li>Rigorous Quality Check & Assurance for reliable results</li>
                                    <li>Regular Updates & Maintenance for staying at the forefront.</li>

                                </div>
                                
                                <img src="https://www.tigren.com/blog/wp-content/uploads/2022/01/ecommerce-workflow-management.jpg"/>
                        </div>
                       
                </div>
                
                <div className="ecommerce__client">
                    <h1>Client Success Stories</h1>
                    <p><b> Discover inspiring stories of businesses thriving with our expertise</b></p>
                    <div className="ecommerce__client__stories">
                        <div className="ecommerce__client__box">
                            <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-fashion-male-posing-studio-near-blue-wall_158538-21048.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=sph"/>
                            <h3>Dineshmartin </h3>
                            <h6>Scaling E-commerce Operations</h6>
                            <p>Uncover how we tripled their product listings, leading to a remarkable 40% increase in sales</p>
                        </div>
                        <div className="ecommerce__client__box">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-fashion-male-posing-studio-near-blue-wall_158538-21048.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=sph"/>
                            <h3>Hari </h3>
                            <h6>Catalog Management Solutions</h6>
                            <p>Learn how we transformed their catalog, reducing cart abandonment rates by 25%</p>
                        </div>
                        <div className="ecommerce__client__box">
                        <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-fashion-male-posing-studio-near-blue-wall_158538-21048.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=sph"/>
                            <h3>Kishore </h3>
                            <h6> AI-Driven Content Revolution</h6>
                            <p>Witness how our AI-powered content management boosted product visibility and conversion rates by an astounding 30%</p>
                        </div>
                    </div>
                </div>
                <div className="ecommerce__setus">
                        <div className="ecommerce__setus__content">
                                <h1>What Sets Us Apart</h1>
                                <img src="https://img.freepik.com/free-photo/solution-question-system-problem-solving-concept_53876-15294.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"/>
                                <p>Discover the Aszen Technologies advantage</p>
                                <div className="ecommerce__setus__points">
                                    <li>Seasoned E-commerce Specialists who understand your business.</li>
                                    <li>Cutting-edge Technology and AI-driven Solutions for futuristic results</li>
                                    <li>Tailor-made Strategies to fit your unique requirements.</li>
                                    <li>Uncompromising Commitment to Data Security and Confidentiality.</li>
                                    <li>Rapid Turnaround Time and 24/7 Customer Support for peace of mind</li>

                                </div>
                     </div>
                 </div>
                 <div className="ecommerce__benifits">
                    {/* <img src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=sph"/> */}
                   
                    <div className="ecommerce__outsource">
                        <div className="ecommerce__outsource__content">
                                <h1>Benefits of Outsourcing E-commerce Services to Us:</h1>
                                <img src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=sph"/>
                                <p>Unlock a world of advantages by partnering with us</p>
                                <div className="ecommerce__outsource__points">
                                    <li>Streamlined Data Management for optimized performance.</li>
                                    <li>Enhanced Product Data Accuracy for impeccable customer experience.</li>
                                    <li>Compelling Product Presentation for captivating your audience.</li>
                                    <li>Increased Sales and Revenue for unmatched success.</li>
                                    <li>Cost-Effective Solutions to maximize your ROI.</li>

                                </div>
                     </div>
                 </div>
                 </div>

               

                <Ourclient/>
                <Footer/>
        </div>
    )
}
export default Ecommerce;