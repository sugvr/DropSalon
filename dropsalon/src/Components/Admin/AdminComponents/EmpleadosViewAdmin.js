import React from 'react'
import Empleado2 from './Empleado/Empleado'
import './EmpleadoViewAdmin.css'

import fotoEmpleado1 from "../../Assets/chrystal.jpg"
import fotoEmpleado2 from "../../Assets/lorriel.jpg"
import fotoEmpleado3 from "../../Assets/Arianna.jpg"
import fotoEmpleado4 from "../../Assets/wilnelis.jpg"


function EmpleadoViewAdmin(){
    return(
        <div className="ViewEmpleados">
            <h3>Empleados</h3>
        <div className="ViewEmployeeSelect">
        <nav>
            <div >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="#about-section"><Empleado2 className="empleado1"image={fotoEmpleado1} name="Chrystal Borrero"/></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about-section" ><Empleado2 className="empleado1"image={fotoEmpleado2} name="Lorriel Galarza"/></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about-section"><Empleado2 className="empleado1"image={fotoEmpleado3} name="Arianna Orta"/></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about-section"><Empleado2 className="empleado1"image={fotoEmpleado4} name="Wilnelis Daris"/></a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </div>
      </div>
    )
}

export default EmpleadoViewAdmin