import React from 'react'
import SingUp from './SignUp'
import Agenda from './EmployeeComponents/Agenda'
import Nav from './AdminComponents/AdminNav'

function HomeAdmin(){
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