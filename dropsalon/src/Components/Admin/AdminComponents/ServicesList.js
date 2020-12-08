import React, { Component } from 'react'
import ListadeServicio from './ServicesTemplate/ListadeServicio'
import './ServicesList.css'
import axios from 'axios'

class ServicesList extends Component {
  state = {
    service_name: "",
   service_description: "",
   duration: "",
   price:""
   
  };

  onServiceChange = e => {
    this.setState({
      service_name: e.target.value
    });
  };

  onDescrChange = e => {
    this.setState({
      service_description: e.target.value
    });
  };
  onDurationChange = e => {
    this.setState({
      duration: e.target.value
    });
  };
  onPriceChange = e => {
    this.setState({
      price: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
     service_name: this.state.service_name,
     service_description: this.state.service_description,
     durationl: this.state.duration,
     price:this.state.price

    };
    axios
      .post("http://localhost:4000/services", data )
      .then(function (res) {
        //If the response is 2xx the set cookie and redirect
        sessionStorage.setItem('jwt', res.data.jwt)
        console.log(res)
        alert(res.data)
      }).catch(function (err) {
        //Set msg to user from the following response 
        if (err) {
          console.log(err)
          alert(err)
        }
      })
  };
  render () {

    return (
        <div className="ServicesSpace">
            <div className="Services-title">
                <div className="ServicesTitle">
                    <h3>Servicios</h3>
                </div>
            </div>
            <ListadeServicio/>
            <div>
              
            </div>
         

            <h1>Añadir servicio</h1>
            <form className="servicePost-containt" onSubmit={this.handleSubmit}>
           
                <label className="labels">
                    Servicio
        <input name="service_name" type="name" placeholder="Nombre de servicio" onChange={this.onServiceChange} />
                </label>
                <label className="labels">
                    Descripcion
        <input name="service_description" type="name" placeholder="Descripcion" onChange={this.onDescrChange} />
                </label>
                <label className="labels">
                    Precio
        <input name="price" type="number" placeholder="Precio" onChange={this.onPriceChange} />
                </label>
                <label className="labels">
                    Duracion
        <input name="duration" type="number" placeholder="Duracion" onChange={this.onDurationChange} />
                </label>

                <button className="submit-service" type="submit">Añadir servicio</button>
            </form>

        
        </div>
    )
}
}


export default ServicesList 