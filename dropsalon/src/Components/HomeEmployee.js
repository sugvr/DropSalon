import React, { useState, useEffect } from 'react'
import Agenda from './EmployeeComponents/Agenda'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './HomeEmployee.css'

const HomeEmployee = (props) => {
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const jwt = sessionStorage.getItem('jwt')
    const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))

    useEffect(() => {
        if (jwt === '' || jwt === null) {
            window.location.href = '/'
        } else if (jwtPayload.role !== 2) {
            sessionStorage.removeItem('jwt')
            window.location.href = '/'
        } else {
            //Send token to verify
            axios.post('http://localhost:4000/verify', { jwt: jwt })
                .catch(function (reason) {
                    console.log(reason)
                    sessionStorage.removeItem('jwt')
                    window.location.href = '/'
                })
                setName(jwtPayload.name)
                setLastName(jwtPayload.last_name)
                console.log('JWT available')
                console.log(jwtPayload)
                console.log(jwtPayload.name)
                console.log(jwtPayload.last_name)

        }
    })
    let history = useHistory()
    const handleLogout = () => {
        sessionStorage.clear()
        history.push("/")
    }

    return (
        <div>
            <div className="Employee-header">
                <div >
                    <h1>DropSalon</h1>
                </div>
                <div >
                    <h1>Hola {name} {last_name} </h1>
                </div>
                <div>
                    <ul className="navbar-nav px-3 mt-0">
                        <li className="nav-item text-nowrap">
                            <button onClick={() => handleLogout()} className="btn btn-danger">Sign out</button>
                        </li>
                    </ul>

                </div>

            </div>
            <Agenda />
        </div>

    )
}

export default HomeEmployee