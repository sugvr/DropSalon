import React from 'react'
import './FormReports.css'

function FormReports() {
    return (

        <div className="FormReports">
            <h1>Reportar</h1>
            <form className="Reports-containt">
                <label>
                    Nombre de empleado
        <input className="ReportsInput" name="" type="name" placeholder="Nombre de cliente" />
                </label>
                <label>
                    Total de los servicios
                    <input className="ReportsInput" name="" type="name" placeholder="Servicio" />
                </label>
                <label>
                    Ganancias de empleado
                    <input className="ReportsInput" name="" type="number" placeholder="Costo de servicio" />
                </label>
                <label>
                    Ganancias del salon
                     <input className="ReportsInput" name="" type="text" placeholder="Comentarios" />
                </label>
                <label>
                   Ganancias del administrador
                     <input className="ReportsInput" name="" type="name" placeholder="Tipo de pago" />
                </label>

                <button className="submit-Report" type="submit">Registrar</button>
            </form>
        </div>

    )
}

export default FormReports