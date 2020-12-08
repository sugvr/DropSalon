import React, {useState,useEffect} from 'react'
import axios from 'axios';

const URL = 'http://localhost:4000/reportes'

const SeeReports = () => {
    const [report, setReport] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setReport(response.data)
    }

    const removeData = (id) => {

        axios.delete(`http://localhost:4000/user/${id}`).then(res => {
            const del = report.filter(report => id !==report.id)
            setReport(del)
            console.log(res)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'name', 'service total semanal', 'ganancia empleado', 'ganancia salon', 'ganancia admin']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return report.map(({ id, employee_name, service_total, gains_employee, gains_salon, gains_admin}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employee_name}</td>
                    <td>{service_total}</td>
                    <td>{gains_employee}</td>
                    <td>{gains_admin}</td>
                    <td>{gains_salon}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
       
            <div className="TableClients">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table> 
        </div>
        

        

        
    )
}


export default SeeReports