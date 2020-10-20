import React, { useState, useEffect } from 'react'
import Agenda from './EmployeeComponents/Agenda'
import axios from 'axios'

const HomeEmployee = (props) => {
    const [name, setName] = useState('')
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

    return (
        <div>
            <h1>Hello {name}</h1>
            <h1>Agenda (Employee Role)</h1>
            <Agenda />
        </div>

    )
}

export default HomeEmployee