import React, { useState, useEffect } from 'react'
import TitleUser from './UserComponents/TitleUser'
import Date from './UserComponents/DatePicker'
import SelectPage from './UserComponents/SelectPro'
import Time from './UserComponents/Time'
import axios from 'axios'
import './HomeUser.css'

function HomeUser() {
    const jwt = sessionStorage.getItem('jwt')
    const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))
    const [name, setName] = useState('')

    useEffect(() => {
        if (jwt === '' || jwt === null) {
            window.location.href = '/'
        } else if (jwtPayload.role != 3) {
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
            <TitleUser />
            <SelectPage />
            <h2>{name}</h2>
            <h3>Selecione Fecha:</h3>
            <div className="DatesView">
                <Date />
                <Time />
            </div>
        </div>
    )
}

export default HomeUser;