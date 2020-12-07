import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './TitleUser.css'

function TitleUser() {
    const jwt = sessionStorage.getItem('jwt')
    const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')

    useEffect(() => {
        if (jwt === '' || jwt === null) {
            window.location.href = '/'
        } else if (jwtPayload.role !== 3) {
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
    }, )
    let history = useHistory()
    const handleLogout = () => {
        sessionStorage.clear()
        history.push("/")
    }
    return (
        <div className="Title-user">
            <div className="divUserTitle">
                <h1>DropSalon</h1>
            </div>
            <div className="hello">
                <h1>Hola, {name} {last_name}</h1>
            </div>

            <ul className="navbar-nav px-3 mt-0">
                    <li className="nav-item text-nowrap">
                        <button className="buttonlogout" onClick={ () => handleLogout() } className="btn btn-danger">Sign out</button>
                    </li>
                </ul>

        </div>
    )
}

export default TitleUser