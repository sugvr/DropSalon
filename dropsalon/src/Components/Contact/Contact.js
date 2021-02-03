import React from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";

import contact from './../../Assets/contactphoto.jpg'

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Isai",
      subject,
      message_html: message,
    };
    emailjs
      .send(
        "service_f56zfkj",
        "template_hmn0xhe",
        templateParams,
        "user_7EOX95dc2S4QQcmkrPZY8"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          this.resetForm();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="Main">
        <h1 className="contact-header">Contactanos</h1>
        <div className="container">
          <div>
            <ul>
              <h3 className="contact-title">¿Necesitas Comunicarte?</h3>
              <li className="contact-list">787-783-2425 </li>
              <li className="contact-list"><img src={contact} alt="contact"/></li>
            </ul>
          </div>

          <div>
            <div className="container-contact">
              <form onSubmit={this.handleSubmit}>
                <h2>Escribenos...</h2>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Nombre y apellido"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Razon"
                    value={subject}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Escribe tu mensaje"
                    value={message}
                    onChange={this.handleChange}
                  />
                </div>
                <button className="contact-button">Contactar</button>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
