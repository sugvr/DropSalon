import React, {Component} from 'react'
import axios from '../../Login/node_modules/axios'
import './FormReports.css'



class FormReports extends Component {
    state = { //read data
      employee_name: "",
     service_total: "",
     gains_employee: "",
     gains_salon:"",
     gains_admin:""
     
    };

  
  
    onNameChange = e => { //get data from label in html
      this.setState({
        employee_name: e.target.value
      });
    };
  
    onTotalChange = e => {
      this.setState({
        service_total: e.target.value
      });
    };
    onEmployeeChange = e => {
      this.setState({
        gains_employee: e.target.value
      });
    };
    onSalonChange = e => {
      this.setState({
        gains_salon: e.target.value
      });
    };
    onAdminChange = e => {
        this.setState({
          gains_admin: e.target.value
        });
      };
    handleSubmit = e => { //read the data
      e.preventDefault();
      const data = {
       employee_name: this.state.employee_name,
       service_total: this.state.service_total,
       gains_employee: this.state.gains_employee,
       gains_salon:this.state.gains_salon,
       gains_admin: this.state.gains_admin
  
      };
      axios //do the request for axios
        .post("http://localhost:4000/reportes", data)
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
  
    render() {
    return (
      <><div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Reportar</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
      </div>
  </div>

        <div className="FormReports">
            <form className="Reports-containt" onSubmit ={this.handleSubmit}>
                <label>
                    Nombre de empleado
        <input className="ReportsInput" name="" type="name" placeholder="Nombre de empleado" onChange={this.onNameChange}/>
                </label>
                <label>
                    Total de los servicios
                    <input className="ReportsInput" name="" type="name" placeholder="Total de servicios semanal" onChange={this.onTotalChange}/>
                </label>
                <label>
                    Ganancias de empleado
                    <input className="ReportsInput" name="" type="number" placeholder="Ganacias para empleado" onChange={this.onEmployeeChange} />
                </label>
                <label>
                    Ganancias del salon
                     <input className="ReportsInput" name="" type="text" placeholder="Ganancias para el salon" onChange={this.onSalonChange}/>
                </label>
                <label>
                   Ganancias del administrador
                     <input className="ReportsInput" name="" type="name" placeholder="Ganacias para administrador" onChange={this.onAdminChange}/>
                </label>

                <button className="submit-Report" type="submit">Registrar Reporte</button>
            </form>
        </div>
        </>

    )
}
}

export default FormReports