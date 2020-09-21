import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="Main">
            <h1 className="contact-header">Contactanos</h1>

            <h3>Si desea una cita, contantese para la creacion de su cuenta</h3>
            <div className="container">
                <div className="contact-form">
                    <div className="box1">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.548242887737!2d-66.6014396851651!3d17.999742987714395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1cd5cdbd9102c5%3A0x8ddfd3ce3103cc59!2sDrop%20Salon!5e0!3m2!1ses!2spr!4v1600649118863!5m2!1ses!2spr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> </div>
                    <div>
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
                </div>
            </div>
        </div>


    )
}

export default Contact;