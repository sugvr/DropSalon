import React from 'react'
import './Clientesview.css'

function ClientesView(props) {
    return (
        <div className="TableClients">
            <div>
                <h2 className="nameUser">{props.nameUser}</h2>
            </div>
            <div>
                <h2 className="lastnameUser">{props.lastnameUser}</h2>
            </div>
            <div>
                <h2 className="Username">{props.Username}</h2>
            </div>
            <div>
                <h2 className="Role">{props.Role}</h2>
            </div>
        </div>
    )
}

export default ClientesView;