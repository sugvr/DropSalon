import React from 'react'
import './Team.css'

import Empleado from './Empleado/Empleado'

import fotoEmpleado1 from "../../Assets/chrystal.jpg"
import fotoEmpleado3 from "../../Assets/Arianna.jpg"
import fotoEmpleado4 from "../../Assets/wilnelis.jpg"


function Team (){
    return (
        <div>
            <h1 className="team-header">Nuestro Equipo</h1>
            <br />
            <br />
            <div className = "team-container">
            <Empleado className="photo1"image={fotoEmpleado1} name="Chrystal Borrero" job="Dueña / Profesional" desc="✨" li1="-Cosmetologa Certificada"
            li2="-Maquillista Profesional" li3="-Barbería"/>
            <Empleado className="photo3" image={fotoEmpleado3} name="Arianna Orta" job="Profesional" desc="✨" li1="-Cosmetologa Certificada "/>
            <Empleado className="photo4" image={fotoEmpleado4} name="Wilnelis Daris" job="Profesional" desc="✨" li1="-Esteticista"/>
            
           
            </div>
           

                     
         </div>
               
    );
}

export default Team;