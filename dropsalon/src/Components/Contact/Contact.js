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
                        <iframe className="map">
                            
                            src="https://www.google.com/maps/place/1745+Paseo+Las+Colonias,+Ponce,+00716/@18.0030929,-66.5990271,17z/data=!3m1!4b1!4m5!3m4!1s0x8c1cd594fd85f75b:0x3ba49ea403e4b628!8m2!3d18.0030878!4d-66.5968384" allowfullscreen>
                        </iframe> </div>
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