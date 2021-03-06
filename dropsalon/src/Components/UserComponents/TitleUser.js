import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
    return (
        <div className="Title-user">
            <div className="divUserTitle">
                <h1>DropSalon</h1>
            </div>
            <div className="hello">
                <h1>Hola, {name} {last_name}</h1>
            </div>

        </div>
    )
}

export default TitleUser