import React from 'react'
import Calendar from './CalendarTemplate/Calendar'
import './CalendarioAdminView.css'

function CalendarioAdminView() {
    return (
        <div>
            <h3>Calendario de Empleados</h3>
            <div className="Calendars-Container">
                <div>
                <Calendar day="22 de octubre" title="trabajos para hoy" li1="tal cosa" /> 
                </div>
                <div>
                <Calendar day="23 de octubre" title="trabajos para hoy" li1="tal cosa" li2="la otra cosa" />
                </div>
                <div>
                <Calendar day="24 de octubre" title="trabajos para hoy" li1="tal cosa" li2="mira no se"/>
                </div>
            </div>
        </div>

    )
}

export default CalendarioAdminView