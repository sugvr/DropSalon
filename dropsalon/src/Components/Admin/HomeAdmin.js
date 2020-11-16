import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-dom"
import './HomeAdmin.css'
import AdminHeader from './AdminComponents/AdminHeader'
import EmpleadoViewAdmin from './AdminComponents/EmpleadosViewAdmin'
import CalendarioAdminView from './AdminComponents/calendarioAdminview'
import ClientesViewAdmin from './AdminComponents/ClientesViewAdmin'
import ServiceList from './AdminComponents/ServicesList'
import FormReports from './AdminComponents/FormReports'
import DashboardNav from './AdminComponents/DashboardNav/DashboardNav'
import SideBar from './AdminComponents/SideBar/SideBar'
import DashboardContent from './AdminComponents/DashboardContent/DashboardContent'



// function HomeAdmin() {
//     return (
//         <div>
//             <DashboardNav></DashboardNav>
//             <Router>
//                 <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar bg-light collapse">
//                     <div className="pt-3" className="sidebar-sticky">
//                         <ul className="nav flex-column">
//                             <li className="nav-item">
//                                 <a className="nav-link active" href="dashborad">
//                                     <Link to="/dashboard" >Dashboard </Link>
//                                 </a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="">
//                                     <Link to="/calendarios" >Calendarios </Link>
//                                 </a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="">
//                                     Usuarios
//                             </a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="">
//                                     Servicios
//                             </a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="">
//                                     Reportes
//                             </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <Route path="dashboard" exact component={DashboardContent} />
//                 <Route path="calendarios" exact component={CalendarioAdminView} />
//             </Router>
//         </div>

//     )
// }

function HomeAdmin() {

    return (
        <>
            {/* <DashboardNav></DashboardNav>
            <div class="container-fluid">
                <div class="row">
                    <SideBar> </SideBar>
                    <DashboardContent></DashboardContent>
                </div>
            </div> */}

            <div className="AdminPage">
                {/* //         <AdminHeader /> */}
                <DashboardNav></DashboardNav>
                <div class="container-fluid">
                    <div class="row">
                        <SideBar> </SideBar>
                        <DashboardContent id="Dashboard" />
                        <div className="Admin-container" id="Calendarios">
                            <div>
                                <EmpleadoViewAdmin />
                            </div>
                            <div className="separador">
                                <CalendarioAdminView />
                            </div>
                            <div className="Centercontent" id ="Usuarios">
                            <ClientesViewAdmin />
                            </div>
                            <div className="Centercontent2" id ="Servicios">
                            <ServiceList />
                            </div>
                            <div id ="Reportes">
                            <FormReports />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAdmin;