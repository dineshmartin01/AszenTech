import React from "react";
import './Publishing.css';
import Header from "../Header/Header";
import Ourclient from "../Our Client/Ourclient";
import Footer from "../Footer/Footer";
import Cardsebook from "../Cards/Cards-ebook/Cardsebook";
import Cardsepub from "../Cards/Cards-epub/Cardsepub";

function Publishing(){
    return(
        <div>
            <Header/>
            <div className="epublishing__head">
                <h1>E-Publishing</h1>
                <p>Welcome to Aszen Technologies - Empowering Your E-Publishing Endeavors with Cutting-Edge Solutions</p>
                <p>Redefine Your Publishing Journey - Unleash the Power of Interactive E-Publishing with Aszen Technologies!</p>
            </div>
            <div className="epublishing__introduction">
                <h1>Introduction</h1>
                <p> At Aszen Technologies, we recognize the transformative potential of E-Publishing services in revolutionizing the way content is delivered and consumed. Our E-Publishing services cater to a wide range of industries, 
                    providing expert solutions to create, convert, and distribute eBooks, interactive assessments, journals, and more. With a focus on innovation and excellence, we aim to elevate your publishing ventures to new heights 
                    with our top-tier services and customer-centric approach.</p>
            </div>
            <div className="epublishing__services">
                <h1>E-Publishing Services</h1>
                <p>E-Publishing services encompass a diverse range of solutions that facilitate digital content creation, conversion, and distribution. Our comprehensive offerings ensure that your content stands out, engaging your audience and providing a seamless reading experience.</p>
            </div>
            <div className="epublishing__ebook">
                <h1>E-Book Development Services</h1>
                <p>Our eBook Development Services cater to authors, publishers, and organizations looking to convert their content into engaging digital formats. From standard eBooks to interactive and fixed layout versions, we deliver exceptional solutions tailored to your needs</p>
            </div>

            
            <Cardsebook
            title={"E-Book Development Services"}
            content1={"eBook Creation & Conversion Services"}
            content2={"Interactive & Enhanced eBooks"}
            content3={"Fixed Layout eBooks"}
            content4={"HTML5 & ePub3 eBooks"}
            content5={"Read Aloud/Audio Books"}
            content6={"Book-as-an-App Development Services"}
            content7={"eBook Distribution Services"}
            content8={"Typesetting & Cover Design Services"}
            content9={"Web Accessible eBooks Development"}
            content10={"Journals Conversion Publishing Services"}
            content11={"Interactive Assessments Development"}
            content12={"Flash to HTML5 Conversion Services"}
           />
            
            <div className="epublishing__services__across">
                <h1>E-Publishing Services Across Industries</h1>
                <p>Our E-Publishing services cater to various industrial sectors and their subsectors, including but not limited to</p>
                <div className="epublishing__services__box">
                    <Cardsepub
                    img={"https://img.freepik.com/premium-vector/process-education-laptop-as-ebook-online-education-concept-learning_212216-628.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"}
                    title={"Education & E-Learning"}
                    desc={"Enhance educational content with interactive assessments and accessible eBooks"}                    
                    />
                    <Cardsepub 
                    img={"https://st3.depositphotos.com/1001201/14837/i/450/depositphotos_148372273-stock-photo-books-enter-into-the-screen.jpg"}
                    title={"Publishing & Literature"}
                    desc={"Convert print publications into captivating eBooks and audiobooks"}                    
                    />
                    <Cardsepub
                    img={"https://img.freepik.com/premium-vector/vector-illustration-doctor-organizing-patient-records-medical-documents-efficient-patient-data-management-by-doctor-with-files-records-can-use-ad-poster-campaign-website-apps_4968-2117.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"}
                    title={"Healthcare & Medical"}
                    desc={"Digitize medical journals and publications for easy access and distribution."}                    
                    />
                    <Cardsepub
                    img={"https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"}
                    title={"Corporate Training & Development"}
                    desc={"Create engaging training materials with multimedia-rich eBooks and interactive content."}                    
                    />
                    
                </div>
                <div className="epublishing__services__box1">
                    <Cardsepub
                    img={"https://img.freepik.com/premium-vector/ebooks-interne-courses-trainings-social-media-tools-internet-business-communication_143808-564.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"}
                    title={"Research & Academic "}
                    desc={"Digitally publish research papers and academic journals for global access."}                    
                    />
                    <Cardsepub
                    img={"https://img.freepik.com/free-photo/arrangement-movie-elements-black-background_23-2148416799.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"}
                    title={"Entertainment & Media"}
                    desc={"Enrich the entertainment industry with interactive and multimedia eBooks"}                    
                    />
                    <Cardsepub
                    img={"https://img.freepik.com/premium-photo/it-icons-virtual-screen-information-technology_438099-10261.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"}
                    title={"Technology & IT"}
                    desc={"Deliver technical documentation and manuals in accessible digital formats"}                    
                    />
                </div>
           </div>
           <div className="epublishing__workflow">
                <h1>Workflow of Our E-Publishing Services</h1>
                <p>Our E-Publishing workflow involves the following key stages:</p>
                <div className="epublishing__content">
                    <h3>Consultation:</h3><p>We understand your publishing goals and requirements, tailoring our services accordingly</p>
                    <h3>Content Conversion:</h3><p>We expertly convert your content into the desired digital formats, ensuring fidelity and interactivity</p>
                    <h3>Enhancements:</h3><p>We add interactive elements, multimedia, and enhancements to enrich the user experience</p>
                    <h3>Quality Assurance:</h3><p>Rigorous testing and quality checks are performed to ensure flawless deliverables</p>
                    <h3>Distribution & Support:
                        </h3><p>We assist in distributing your content across platforms and provide ongoing support</p>
                
                </div>


           </div>
            <Ourclient/>
                <Footer/>
        </div>
    )
}
export default Publishing;