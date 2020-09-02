import React from 'react'
import './Citas.css'


function Citas() {
    return (
        <div className = "login">
            <h1 className= "date-title">Saca tu Cita</h1>
              <div className ="caja2">
                <blockquote>
                <h5>Les recuerdo, <br/>si aun no tiene una cuenta tiene que comunicarse con nosotros para asi poder crearla. <br/>
                De esta manera, usted podrá sacar su cita con los diferentes profesionales. </h5>
                
                </blockquote>
                
                
            </div>
            <div className ="caja1">
            <form >
                <div class="form-group">
                    <label for="inputEmail">User</label>
                    <input type="user" class="form-control" id="inputEmail" placeholder="User" />
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                </div>
               
                    <button type="submit" class="btn btn-primary">Entrar</button>
            </form>
            </div>
          
        </div>
    )
}

export default Citas