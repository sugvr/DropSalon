import React from 'react'
import SingUp from './SignUp'
function HomeAdmin(){
    return(
        <>
        <h1>Bienvenido de vuelta Administardor</h1>
        <h2>Calendarios de empleados</h2>
        <p>Aqui se muestra el calendario de todos los empleados</p>
        <button>Sacar citas</button>
        <h3>Registrar a un usuario</h3>
        <SingUp />
        </>
    )
}

export default HomeAdmin;