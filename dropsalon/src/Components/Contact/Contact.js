import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="Main">
            <h1 className="contact-header">Contactanos</h1>
            <div className="container">
                <div>
                    <ul>
                        <h3 className="about-title">¿Necesitas Comunicarte?</h3>
                        <li className="about-list">787-783-2425 </li>
                        <li className="about-list">email.test@email.com</li>
                        <li><iframe title="embed"src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdropsalon%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=808369193324107"
                            width="340" height="500" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
                    </ul>
                </div>

                <div className="contact-form">
                    <div className="box1">
                        <iframe title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.548242887737!2d-66.6014396851651!3d17.999742987714395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1cd5cdbd9102c5%3A0x8ddfd3ce3103cc59!2sDrop%20Salon!5e0!3m2!1ses!2spr!4v1600649118863!5m2!1ses!2spr"
                            width="700" height="613" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;