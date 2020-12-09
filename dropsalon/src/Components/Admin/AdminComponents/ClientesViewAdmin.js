import React from 'react'
import './ClientesViewAdmin.css'
import ClientesView from './ClientesTemplate/ClientesView'

function ClientesViewAdmin() {
    return (
        <div className="ClientesSpace">
           <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Usuarios</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                </div>
            </div>
           
            <div>
                <ClientesView nameUser="Name" lastnameUser="Lastname" Username="Username" Role="Role" />
            </div>

        </div>
    )
}

export default ClientesViewAdmin