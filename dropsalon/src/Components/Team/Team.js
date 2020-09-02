import React from 'react'
import './Team.css'

import Empleado from './Empleado/Empleado'

import fotoEmpleado1 from "../../Assets/chrystal.jpg"
import fotoEmpleado2 from "../../Assets/lorriel.jpg"
import fotoEmpleado3 from "../../Assets/Arianna.jpg"


function Team (){
    return (
        <div>
            <h1 className="team-header">Nuestro Equipo</h1>
            <br />
            <br />
            <div className = "team-container">
            <Empleado className="photo1"image={fotoEmpleado1} name="Chrystal Borrero" job="Dueña / Profesional" desc="✨" li1="-Cosmetologa Certificada"
            li2="-Maquillista Profesional" li3="-Barbería"/>
            <Empleado image={fotoEmpleado2} name="Lorriel Galarza" job="Profesional" desc="✨" li1="-Certificacion Técnica de Uñas Avanzada"
            li2="-Certificacion Manicura Rusa" li3="-Certificacion depilación y Brow tint"/>
            <Empleado className="photo3" image={fotoEmpleado3} name="Arianna Orta" job="Profesional" desc="✨" li1="-Cosmetologa Certificada "/>
            
           
            </div>
           

                     
         </div>
               
    );
}

export default Team;