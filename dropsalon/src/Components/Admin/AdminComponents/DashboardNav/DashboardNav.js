import React from 'react'
import './DashboardNav.css'
<<<<<<< HEAD

function DashboradNav() {
=======
import {useHistory, useLocation} from 'react-router-dom'

function DashboradNav() {
    let history = useHistory()
    let loc = useLocation()

    const handleLogout = () => {
        sessionStorage.clear()
        history.push("/")
    }
>>>>>>> ej

    return (
        <>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">DropSalon</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
<<<<<<< HEAD
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#header-section">Sign out</a>
=======
                <ul className="navbar-nav px-3 mt-0">
                    <li className="nav-item text-nowrap">
                        <button onClick={ () => handleLogout() } className="btn btn-danger">Sign out</button>
>>>>>>> ej
                    </li>
                </ul>
                
            </nav>           
        </>
    )
}

export default DashboradNav;