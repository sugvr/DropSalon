import React from 'react'
import './FormReports.css'

function FormReports() {
    return (

        <div className="FormReports">
            <h1>Reportar</h1>
            <form className="Reports-containt">
                <label>
                    Nombre de cliente
        <input className="ReportsInput" name="" type="name" placeholder="Nombre de cliente" />
                </label>
                <label>
                    Servicio
                    <input className="ReportsInput" name="" type="name" placeholder="Servicio" />
                </label>
                <label>
                    Costo de servicio
                    <input className="ReportsInput" name="" type="number" placeholder="Costo de servicio" />
                </label>
                <label>
                    Comentarios
                     <input className="ReportsInput" name="" type="text" placeholder="Comentarios" />
                </label>
                <label>
                    Tipo de pago
                     <input className="ReportsInput" name="" type="name" placeholder="Tipo de pago" />
                </label>
                <label>
                    Propina
                     <input className="ReportsInput" name="" type="number" placeholder="Propina" />
                </label>
                <label>
                    Empleado que atendió
                        <input className="ReportsInput" name="" type="name" placeholder="Empleado que atendió" />
                </label>

                <button className="submit-Report" type="submit">Registrar</button>
            </form>
        </div>

    )
}

export default FormReports