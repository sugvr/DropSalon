import React from 'react'

function HomeUser() {
    return (
        <>
        <form>
            <h1>Saca tu Cita</h1>
            <h2>Escoge al profesional de preferencia</h2>
            <input type="radio" name="gender" value="male"> Chrystal Borrero </input>
            <input type="radio" name="gender" value="female"> Lorriel Galarza </input>
            <input type="radio" name="gender" value="female"> Arriana Ortiz </input>

            <h2>Escoge el trabajo a realizarse</h2>
            <input type="radio" name="gender" value="male"> Recorte </input>
            <input type="radio" name="gender" value="female"> lavado </input>
            <input type="radio" name="gender" value="female"> tinte </input>

            <h2>Disponibilidad del profesional</h2>
            <input type="radio" name="gender" value="male"> hora1</input>
            <input type="radio" name="gender" value="female"> hora2 </input>
            <input type="radio" name="gender" value="female"> hora3 </input>
            <button>Agendar</button>
            </form>
        </>
    )
}

export default HomeUser;