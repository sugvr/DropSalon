import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'

function SideBar() {

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar bg-light collapse">
                <div className="pt-3" className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/homeadmin/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/calendarios">
                                Calendarios
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/homeadmin/usuarios">
                                Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/homeadmin/servicios">
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/homeadmins/reportes">
                                Reportes
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SideBar;