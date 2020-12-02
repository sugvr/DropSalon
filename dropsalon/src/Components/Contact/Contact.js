import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="Main">
            <h1 className="contact-header">Contactanos</h1>
            <div className="container">
                <div>
                    <ul>
                        <h3 className="contact-title">¿Necesitas Comunicarte?</h3>
                        <li className="contact-list">787-783-2425 </li>
                        <li className="contact-list">email.test@email.com</li>
                    </ul>
                </div>
                <div>
                    <iframe title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.548242887737!2d-66.6014396851651!3d17.999742987714395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1cd5cdbd9102c5%3A0x8ddfd3ce3103cc59!2sDrop%20Salon!5e0!3m2!1ses!2spr!4v1600649118863!5m2!1ses!2spr"
                        width="auto" height="auto" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        </div>


    )
}

export default Contact;