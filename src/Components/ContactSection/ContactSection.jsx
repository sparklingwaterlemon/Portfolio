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
            }, (error) => {
                console.log("error", error.text);
            });
        
        e.target.reset();
        // change to SWAL sweetalert
        alert("Your message was sent!")
    };

    return (
        <section id="contact">
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