import React from 'react'
import './ClientesViewAdmin.css'
import ClientesView from './ClientesTemplate/ClientesView'

function ClientesViewAdmin() {
    return (
        <div className="ClientesSpace">
            <div className="Clientes-title">
                <div className="ClientesTitle">
                    <h3>Usuarios</h3>
                </div>
            </div>
            <div>
                <ClientesView nameUser="Name" lastnameUser="Lastname" Username="Username" Role="Role" />
            </div>

        </div>
    )
}

export default ClientesViewAdmin