import React, {useState,useEffect} from 'react'
import './Clientesview.css'
import axios from 'axios';
import SignUp from './../../../SignUp'
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

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = user.filter(user => id !== user.id)
            setUser(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'name', 'last_name', 'email', 'role', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return user && user.map(({ id, name, last_name, email, role }) => {
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
// export default class ClientesView extends React.Component {
//     state = {
//         name: [],
//     }

  
//     componentDidMount() {
//         axios.get(`http://localhost:4000/user`)
//             .then(res => {
//                 const name = res.data;
//                 this.setState({ name });


//             })
         
        
//     }
  
//     render() {
       
//         return (
//             <div className="TableClients">
//                 <table class="table table-striped table-sm">
//                     <thead>
//                         <tr>
//                             <th>Nombre</th>
//                             <th>Apellido</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                       
//                         <tr>
//                             {this.state.name.map(name => <td > {name.name}</td>)}
//                         </tr>
//                         <tr>
//                             {this.state.name.map(name => <td > {name.last_name}</td>)}
//                         </tr>
//                         <tr>
//                             {this.state.name.map(name => <td > {name.email}</td>)}
//                         </tr>
//                         <tr>
//                             {this.state.name.map(name => <td > {name.role}</td>)}
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//         )
//     }
// }



/* // function ClientesView(props) {
//     return (
//         <div className="TableClients">
//             <div>
//                 <h2 className="nameUser">{props.nameUser}</h2>
//             </div>
//             <div>
//                 <h2 className="lastnameUser">{props.lastnameUser}</h2>
//             </div>
//             <div>
//                 <h2 className="Username">{props.Username}</h2>
//             </div>
//             <div>
//                 <h2 className="Role">{props.Role}</h2>
//             </div>
//         </div>
//     )
// }

// export default ClientesView; */