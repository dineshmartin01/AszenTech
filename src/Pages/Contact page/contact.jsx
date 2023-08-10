import React from "react";
import './contact.css';
import Header from "../../components/Header/Header";
// import {} from </react-hook-form>
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../../components/Footer/Footer";

const schema = yup.object().shape({
    name: yup.string().required('Name is mandatory'),
    email:yup.string().email('pls enter valid email').required('Enter Your Email'),
    number:yup.number().integer().required('Enter your Number').max(10,'Enter upto 10 char only'),
    message:yup.string().required('Enter Your Message')
})

function Contact() {
    const { register, handleSubmit, formState:{ errors }}= useForm({resolver:yupResolver(schema)});
    return(
        <>
        <Header/>
        <div>
            
            <div className="contactus">
                <div className="contact-inner">
                    <div className="contact-inner1">
                        <div className="help">
                            <div className="help-1">
                                <h3>Need our help?</h3>
                            </div>
                            <div className="help-2">
                                <p>
                                Let's discuss your case and how can we help you
                                </p>
                            </div>
                            <div className="help-3">
                                <p>Want to give us a try? Skip the queue and send us an email explaining your idea.
                                     We'll come back to you with a bespoke demo based on your business needs, free of charge!</p>
                            </div>
                        </div>
                        <div className="help2">
                                    <div className="address">
                                        <img src="https://cdn-icons-png.flaticon.com/128/4020/4020599.png"/>
                                    </div>
                                    <div className="address1">
                                            <div className="address1-1">
                                                <h4>Office Address</h4>
                                                <p>India</p>
                                                <p>Head Quarters</p>
                                                <p>Bangalore</p>
                                                <p>3rd Floor,Hsr, Hsr Sector2,Bangalore,Karnataka-	560001</p>
                                            </div>
                                    </div>
                        </div>

                    </div>
                    <div className="contact-inner2">
                        <div className="form">
                                <div className="touch">
                                    <h1>Get In Touch</h1>
                                    <p>We work with business leaders, corporations and startups worldwide. How can we help you?</p>
                                </div>
                                <div className="request">
                                    <h3>Request a Quote!</h3>
                                    <form className="request-1" onSubmit={handleSubmit((data)=>
                                        console.log(data)
                                        )}>
                                        <input {...register('name')}placeholder="Enter your name"/>
                                        <p>{errors?.name?.message}</p>
                                        <input {...register('email')}placeholder="Enter your Email"/>
                                        <p>{errors?.email?.message}</p>
                                        <input {...register('number')}placeholder="Enter your Number"/>
                                        <p>{errors?.number?.message}</p>
                                        <input {...register('message')} placeholder="Message"/>
                                        <p>{errors?.message?.message}</p>
                                        <input type="submit" id="submit"/>

                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="send">
                <div className="send-1">
                    <h1>Sign up to receive our newsletter</h1>
                    <div className="send-2">
                        <input type="email" placeholder="Enter Your Email"/>
                        <img src="https://img.freepik.com/free-vector/online-education-icon-learning-courses-laptop-with-electronic-book-concept_39422-668.jpg?size=626&ext=jpg&ga=GA1.2.2018729287.1683716202&semt=ais"/>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
        
        </>
    )
}
export default Contact