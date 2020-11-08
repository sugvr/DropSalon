import React from 'react'
import './SideBar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'

function SideBar() {

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar bg-light collapse">
                <div className="pt-3" className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="/dashboard">
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calendarios">
                                Calendarios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Usuarios">
                                Usuarios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Servicios">
                                Servicios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Reportes">
                                Reportes
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SideBar;