import React from 'react'
import './Team.css'

import Empleado from './Empleado'

function Team (){
    return (
        <div>
            <h1>Nuestro Equipo</h1>
            <div className = "Container">
            <Empleado image={process.env.PUBLIC_URL + '/images/chrystal.jpg'} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
            <Empleado image={process.env.PUBLIC_URL + '/images/chrystal.jpg'} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
            <Empleado image={process.env.PUBLIC_URL + '/images/chrystal.jpg'} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
            </div>
           

                     
         </div>
               
    );
}

export default Team;