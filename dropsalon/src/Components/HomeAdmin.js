import React, {useState,useEffect} from 'react'
import SingUp from './SignUp'
import Agenda from './EmployeeComponents/Agenda'
import Nav from './AdminComponents/AdminNav'
import axios from 'axios'

function HomeAdmin(){
    const [name, setName] = useState('')
    const jwt = sessionStorage.getItem('jwt')
    const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))
    
    useEffect(() => {
        if (jwt === '' || jwt === null) {
            window.location.href = '/'
        } else if (jwtPayload.role != 1) {
            sessionStorage.removeItem('jwt')
            window.location.href = '/'
        } else {
            //Send token to verify
            axios.post('http://localhost:4000/verify', { jwt: jwt })
                .catch(function (reason){
                    console.log(reason)
                    sessionStorage.removeItem('jwt')
                    window.location.href = '/'
            })
            setName(jwtPayload.name)
            console.log('JWT available')
            console.log(jwtPayload)
            console.log(jwtPayload.name)
        }
    }, [])

    return(
        <>
        <h1>Bienvenido de vuelta Administardor {name}</h1>
        <Nav />
        <Agenda id="Agenda-Admin"/>
        <SingUp id="AdminSignup"/>
        </>
    )
}

export default HomeAdmin;