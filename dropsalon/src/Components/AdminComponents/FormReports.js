import React from 'react'
import './FormReports.css'

function FormReports() {
    return (
     
            <div className = "FormReports">
                <h1>Reportar</h1>
                <form className="Reports-containt">
                    <label className="Reportslabels">
                        Nombre de cliente
        <input name="" type="name" placeholder="Nombre de cliente" />
                    </label>
                    <label className="Reportslabels">
                        Servicio
        <input name="" type="name" placeholder="Servicio" />
                    </label>
                    <label className="Reportslabels">
                        Costo de servicio
        <input name="" type="number" placeholder="Costo de servicio" />
                    </label>
                    <label className="Reportslabels">
                        Comentarios
        <input name="" type="text" placeholder="Comentarios" />
                    </label>
                    <label className="Reportslabels">
                        Tipo de pago
        <input name="" type="name" placeholder="Tipo de pago" />
                    </label>
                    <label className="Reportslabels">
                        Propina
        <input name="" type="number" placeholder="Propina" />
                    </label>
                    <label className="Reportslabels">
                        Empleado que atendió
                        <input name="" type="name" placeholder="Empleado que atendió" />
                    </label>

                    <button className="submit-Report" type="submit">Registrar</button>
                </form>
            </div>
     
    )
}

export default FormReports