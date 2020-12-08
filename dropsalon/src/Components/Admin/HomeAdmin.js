import React from 'react'
import './HomeAdmin.css'
// import AdminHeader from './AdminComponents/AdminHeader'
import EmpleadoViewAdmin from './AdminComponents/EmpleadosViewAdmin'
import CalendarioAdminView from './AdminComponents/calendarioAdminview'
import ClientesViewAdmin from './AdminComponents/ClientesViewAdmin'
import ServiceList from './AdminComponents/ServicesList'
import FormReports from './AdminComponents/FormReports'
import DashboardNav from './AdminComponents/DashboardNav/DashboardNav'
import SideBar from './AdminComponents/SideBar/SideBar'
import SeeReports from './AdminComponents/SeeReports'
import DashboardContent from './AdminComponents/DashboardContent/DashboardContent'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'


function HomeAdmin() {

    return (
        <>
            <DashboardNav></DashboardNav>
            <div className="container-fluid">
                <div className="row">
                    <Router>
                        <SideBar></SideBar>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Switch>
                                <Route path="/homeadmin/dashboard">
                                    <DashboardContent></DashboardContent>
                                </Route>
                                <Route path="/homeadmin/calendarios">
                                    <CalendarioAdminView />
                                </Route>
                                <Route path="/homeadmin/usuarios">
                                    <ClientesViewAdmin />
                                </Route>
                                <Route path="/homeadmin/servicios">
                                    <ServiceList />
                                </Route>
                                <Route path="/homeadmin/reportes">
                                    <FormReports />
                                </Route>
                                <Route path="/homeadmin/seereports">
                                    <SeeReports />
                                </Route>
                            </Switch>
                        </main>
                    </Router>
                </div>
            </div>

            {/* <div classNameName="AdminPage">
        <AdminHeader />
            <div classNameName="Admin-container">
                <div>
                    <EmpleadoViewAdmin />
                </div>
                <div classNameName="separador">
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