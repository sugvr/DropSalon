import React from 'react'
import './Contact.css'

function Contact() {
    return(
        <div className="Main">
            <h1>Contactanos</h1>

            <h3>Si desea una cita, contantese para la creacion de su cuenta</h3>
            <div className = "container">
                <div classname="box1"><img src={process.env.PUBLIC_URL + '/images/Logo.jpg'} alt="Logo del salon"/> </div>
            <div className="box2"id="after_submit"></div>
            <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
            <div className="row">
                <label className="required" for="name">Nombre</label><br />
                <input id="name" className="input" name="name" type="text" value="" size="30" /><br />
                <span id="name_validation" className="error_message"></span>
            </div>   
            
            <div class="row">
                <label class="required" for="email">email</label><br/>
                 <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
                <span id="email_validation" class="error_message"></span>
            </div>

            <div class="row">
                 <label class="required" for="message">mensaje</label><br />
                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
                <span id="message_validation" class="error_message"></span>
            </div>

            <input id="submit_button" type="submit" value="Send email" />



            </form>
            </div>

  
        </div>
    )
}

export default Contact;