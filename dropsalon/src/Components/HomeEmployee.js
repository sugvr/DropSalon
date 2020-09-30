import React, { useState } from 'react'
import { useLocation }  from 'react-router-dom'
import Agenda from './EmployeeComponents/Agenda'

const HomeEmployee = (props) => {
    let location = useLocation();

    // const [jwt, SetJWT] = sessionStorage.getItem('jwt')
    // const [jwtPayload, jwtSetPayload] = jwt.split('.')[1]

    // if (jwt === '' || jwt === null) {
    //     console.log('JWT available')
    // } else {
    //     console.log('JWT NOT available')
    //     console.log(location)
    // }

    const [name, setName] = useState('')
    const jwt = sessionStorage.getItem('jwt')

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
            <h1>Hello {name}</h1>
            <h1>Agenda (Employee Role)</h1>
        <Agenda/>
        </div>
        
    )
}

export default HomeEmployee