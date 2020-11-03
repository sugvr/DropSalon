import React, { useState, useEffect } from 'react'
import './HomeAdmin.css'
import AdminHeader from './AdminComponents/AdminHeader'
import EmpleadoViewAdmin from './AdminComponents/EmpleadosViewAdmin'
import CalendarioAdminView from './AdminComponents/calendarioAdminview'
import ClientesViewAdmin from './AdminComponents/ClientesViewAdmin'
import ServiceList from './AdminComponents/ServicesList'
import FormReports from './AdminComponents/FormReports'

function HomeAdmin() {

    return (
        <>
        <div className="AdminPage">
        <AdminHeader />
            <div className="Admin-container">
                <div>
                    <EmpleadoViewAdmin />
                </div>
                <div className="separador">
                    <CalendarioAdminView />
                </div>
            </div>
            <ClientesViewAdmin />
            <ServiceList/>
            <FormReports />
        </div>
            
        </>
    )
}

export default HomeAdmin;