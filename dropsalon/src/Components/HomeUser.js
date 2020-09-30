import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TitleUser from './UserComponents/TitleUser'
import Date from './UserComponents/DatePicker'
import SelectPage from './UserComponents/SelectPro'
import Time from './UserComponents/Time'
import './HomeUser.css'

function HomeUser() {
    const jwt = sessionStorage.getItem('jwt')
    const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))
    const [name, setName] = useState('')

    useEffect(() => {
        if (jwt === '' || jwt === null) {
            window.location.href = '/'
        } else {
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