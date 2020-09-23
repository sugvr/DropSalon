import React from 'react'
import Agenda from './EmployeeComponents/Agenda'

class HomeEmployee extends React.Component{
  
    render() {
        return (
            <div>
             <h1>Agenda (Employee Role)</h1>
            <Agenda/>
            </div>
            
        )
    }
}

export default HomeEmployee