import React from 'react'
import TitleUser from './UserComponents/TitleUser'
import Date from './UserComponents/DatePicker'
import SelectPage from './UserComponents/SelectPro'
import Time from './UserComponents/Time'
import './HomeUser.css'

 function HomeUser(){
    return(
        <div>
            <TitleUser/>
            <SelectPage/>
            <div className="DatesView">
            <Date/>
            <Time/>
            </div>
        </div>
    )
 }

export default HomeUser;