import React, {useState,useEffect} from 'react'
import './Clientesview.css'
import axios from '../../../Login/node_modules/axios';
const URL = 'http://localhost:4000/user'

const ClientesView = () => {
    const [user, setUser] = useState([])
   

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setUser(response.data)
    }

    const removeData = (id) => { //delete data in the backend
        axios.delete(`http://localhost:4000/user/${id}`, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }).then(res => {
            const del = user.filter(user => id !== user.id)
            setUser(del)
            console.log(res)
            
        })
    }
    const upgrade = (id) => { //update user role 2 in the backend
        axios.put(`http://localhost:4000/user/role/${id}`, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }).then(res => {
            
            console.log(res)
            alert("upgrated")
           
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'name', 'last_name', 'email', 'role', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return user.map(({ id, name, last_name, email, role }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                    <td className='opration'>
                        <button className='button' onClick={() => upgrade(id)}>upgrade</button>
                    </td>
                </tr>
            )
        })
    }

    return (
       
            <div className="TableClients">
         
            <table class="table table-striped table-sm">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table> 
        </div>
        

        

        
    )
}


export default ClientesView