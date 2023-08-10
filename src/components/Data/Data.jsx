import React from "react";
import './Data.css';
import Header from "../Header/Header";
import Ourclient from "../Our Client/Ourclient";
import Footer from "../Footer/Footer";
import Cardcontainer from "../Cards/Cardcontainer/Cardcontainer";
import { Link } from "react-router-dom";
const Data=()=>{
    return(
        <>
        <Header/>


       

              <center><h1 className="Data__services">DATA SERVICES</h1></center>
              <center><h1 className="Data__ourservices">Welcome to Our Data Services: Empowering Your Business Through Data</h1></center>

        <div className="data__content">
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/4241/4241222.png"}
             title={<Link>Data Collection Services</Link>}
             desc={"Unlocking the Power of Data for Informed Decisions"}
            />

            
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/10620/10620065.png"}
             title={<Link>Data Entry Services</Link>}
             desc={"Ensuring Data Accuracy and Efficiency"}
            />
            
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/9503/9503054.png"}
             title={<Link>Marketing & Sales Support</Link>}
             desc={"Empowering Your Sales and Marketing Efforts"}
            />
            
            </div>
            <div className="data__content1">
            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/3219/3219733.png"}
             title={<Link>Data Processing Services</Link>}
             desc={"Transforming Raw Data into Actionable Insights"}
            />

            <Cardcontainer
            img={"https://cdn-icons-png.flaticon.com/128/3276/3276250.png"}
             title={<Link>Word Processing & Formatting Services</Link>}
             desc={"Efficiency and Accuracy in Document Management"}
            />
            </div>
            



        <Ourclient/>
        <Footer/>
        </>
    )
}
export default Data;