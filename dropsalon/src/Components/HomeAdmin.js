import React from 'react'
import SingUp from './SignUp'
import Agenda from './EmployeeComponents/Agenda'
import Nav from './AdminComponents/AdminNav'
function HomeAdmin(){
    return(
        <>
        <h1>Bienvenido de vuelta Administardor</h1>
        <Nav />
        <Agenda id="Agenda-Admin"/>
        <SingUp id="AdminSignup"/>
        </>
    )
}

export default HomeAdmin;