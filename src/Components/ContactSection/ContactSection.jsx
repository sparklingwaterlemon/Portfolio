import "./ContactSection.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export default function ContactSection() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ieot69p', 'contact_form', form.current, '9zHpGgxhJn13QZpf0')
            .then((result) => {
                console.log("result", result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Your email has been sent',
                    padding: '1em',
                    color: '#716add',
                    background: '#FCFBFB',
                    backdrop: `
                    rgba(252, 208, 222,.4)
                    url("https://i.imgur.com/hfPNvMU.gif")
                    left top
                    no-repeat
                    `
                })
            }, (error) => {
                console.log("error", error.text);
                Swal.fire({
                    icon: 'error',
                    background: '#FCFBFB',
                    title: 'Oops... Something went wrong',
                    text: error.text,
                })
            });
     
        e.target.reset();
    };
    
    // Email To Contact. Pura Vida
    
    return (
        <section id="contact">

            <div className="marquee-container">
                <div className="marquee-text0">
                    &nbsp;CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT*
                </div>
                <div className="marquee-text1">
                    &nbsp;CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT*
                    {/* &nbsp;CONTACT contact <em>CONTACT</em> <strong>contact</strong> CONTACT <em>contact</em> CONTACT* */}
                </div>
            </div>
            

            
            <div className="contact-form-container">
                <div className="ct-container">
                    <div className="contact-text">
                        Get in touch
                        <br/> Send an email
                        <br/> Namaste
                    </div>
                    <div className="contact-email">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name* </label>
                            <input className="fi" type="text" name="user_name" autoComplete="off" required/>

                            <label>Email*</label>
                            <input className="fi" type="email" name="user_email" autoComplete="off" required/>

                            <label>Subject</label>
                            <input className="fi" type="text" name="email_subject" autoComplete="off"/>

                            <label>Message*</label>
                            <textarea name="email_message" autoComplete="off" required/>

                            <input id="contact-button" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact-right-container">
                <div className="contact-image-container">
                    <img className="contact-image" src={require("../../Assets/ContactImages/ContactImage.jpg")} alt="contact"/>
                </div>
            </div>

        </section>

        
    );
};