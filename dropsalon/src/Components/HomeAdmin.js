import React, { useState, useEffect } from 'react'
import './HomeAdmin.css'
import AdminHeader from './AdminComponents/AdminHeader'
import EmpleadoViewAdmin from './AdminComponents/EmpleadosViewAdmin'
import CalendarioAdminView from './AdminComponents/calendarioAdminview'


import axios from 'axios'

function HomeAdmin() {

    return (
        <>
            <AdminHeader />
            <div className="Admin-container">
                <div>
                    <EmpleadoViewAdmin />
                </div>
                <div className="separador">
                    <CalendarioAdminView />
                </div>

            </div>
        </>
    )
}

export default HomeAdmin;