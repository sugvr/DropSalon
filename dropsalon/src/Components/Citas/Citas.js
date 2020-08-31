import React from 'react'
import './Citas.css'

function Citas() {
    return (
        <div className = "login">
              <div className ="caja2">
                <blockquote>
                <h5>Les recuerdo, <br/>si aun no tiene una cuenta tiene que comunicarse con nosotros para asi poder crearla. Asi podra sacar su cita.</h5>
                </blockquote>
                
            </div>
            <div className ="caja1">
            <form >
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
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