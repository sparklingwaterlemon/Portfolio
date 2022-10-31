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
                    rgba(0,0,123,.4)
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
    
    
    return (
        <section id="contact">
            {/* <img src={nyanCat} /> */}
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" autoComplete="off" required/>

                <label>Email</label>
                <input type="email" name="user_email" autoComplete="off" required/>

                <label>Subject</label>
                <input type="text" name="email_subject" autoComplete="off"/>

                <label>Message</label>
                <textarea name="email_message" autoComplete="off" required/>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};