import React from 'react'
import './Contact.css'
import logo from "../../Assets/Logo.jpg";

function Contact() {
    return (
        <div className="Main">
            <h1>Contactanos</h1>

            <h3>Si desea una cita, contantese para la creacion de su cuenta</h3>
            <div className="container">
                <div classname="box1"><img src={logo} alt="Logo del salon" /> </div>
            </div>
            <div className="box2" id="after_submit"></div>

            <div className="box1"><img src={process.env.PUBLIC_URL + '/images/Logo.jpg'} alt="Logo del salon" /> </div>

            <div className="box2" id="after_submit"></div>
            <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
                <div className="row">
                    <label className="required" htmlFor="name">Nombre</label><br />
                    <input id="name" className="input" name="name" type="text" value="" size="30" /><br />
                    <span id="name_validation" className="error_message"></span>
                </div>

                <div className="row">
                    <label className="required" htmlFor="email">email</label><br />
                    <input id="email" className="input" name="email" type="text" value="" size="30" /><br />
                    <span id="email_validation" className="error_message"></span>
                </div>

                <div className="row">
                    <label className="required" htmlFor="message">mensaje</label><br />
                    <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
                    <span id="message_validation" className="error_message"></span>
                </div>


                <input id="submit_button" type="submit" value="Send email" />



            </form>
        </div>




    )
}

export default Contact;