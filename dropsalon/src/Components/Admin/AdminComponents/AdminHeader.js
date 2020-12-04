import React, { useState, useEffect } from 'react'
import './AdminHeader.css'
import axios from 'axios'

function AdminHeader() {
    const [name, setName] = useState('')
    const jwt = sessionStorage.getItem('jwt')
    const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))
    
    useEffect(() => {
        if (jwt === '' || jwt === null) {
            window.location.href = '/'
        } else if (jwtPayload.role !== 1) {
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
            console.log('JWT available')
            console.log(jwtPayload)
            console.log(jwtPayload.name)
        }
    }, [])


    return <div className="Admin-header">
        <div className="AdminHeader-left">
            <h1>Drop Salon</h1>
        </div>

        <div className="AdminHeader-middle">
            <h1>Bienvenido de vuelta Administardor {name}</h1>
        </div>
        <div className="AdminHeader-right">
       
        </div>

        
    </div>
}

export default AdminHeader 