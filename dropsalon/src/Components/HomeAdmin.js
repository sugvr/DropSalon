import React from 'react'
import SingUp from './SignUp'
function HomeAdmin(){
    return(
        <>
        <h1>Bienvenido de vuelta Administardor</h1>
        <h2>Calendarios de empleados</h2>
        <p>Aqui se muestra el calendario de todos los empleados</p>
        <button>Sacar citas</button>
        <h2>Registrar nuevo empleado</h2>
        <h2>registrar nuevo servicio</h2>
        <h3>Registrar a un usuario</h3>
        <h2>reporte semanal</h2>
        <SingUp />
        </>
    )
}

export default HomeAdmin;