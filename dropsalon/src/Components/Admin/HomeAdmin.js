import React from 'react'
import './HomeAdmin.css'
// import AdminHeader from './AdminComponents/AdminHeader'
// import EmpleadoViewAdmin from './AdminComponents/EmpleadosViewAdmin'
// import CalendarioAdminView from './AdminComponents/calendarioAdminview'
// import ClientesViewAdmin from './AdminComponents/ClientesViewAdmin'
// import ServiceList from './AdminComponents/ServicesList'
// import FormReports from './AdminComponents/FormReports'
import DashboardNav from './AdminComponents/DashboardNav/DashboardNav'
import SideBar from './AdminComponents/SideBar/SideBar'
import DashboardContent from './AdminComponents/DashboardContent/DashboardContent'


function HomeAdmin() {

    return (
        <>
            <DashboardNav></DashboardNav>
            <div class="container-fluid">
                <div class="row">
                    <SideBar>
                        <DashboardContent></DashboardContent>
                    </SideBar>
                </div>
            </div>

            {/* <div className="AdminPage">
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
        </div> */}

        </>
    )
}

export default HomeAdmin;