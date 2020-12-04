import React from 'react'
import TitleUser from './UserComponents/TitleUser'
import Date from './UserComponents/DatePicker'
import SelectPage from './UserComponents/SelectPro'
import './HomeUser.css'

function HomeUser() {
  

    return (
        <div>
            <TitleUser />
            <div className="user-container">
            <SelectPage />
            <h3>Selecione Fecha:</h3>
                <Date />
            </div>
        </div>
    )
}

export default HomeUser;