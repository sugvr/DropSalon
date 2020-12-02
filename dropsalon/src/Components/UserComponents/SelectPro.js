import React, { useState, useEffect } from 'react';
import './SelectPro.css'
import axios from 'axios';

const URL = 'http://localhost:4000/services'

const SelectPage = () => {
  const [services, setService] = useState([])

  useEffect(() => {
      getData()
  }, []) 

  const getData = async () => {
      const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
      setService(response.data)
  }

  const renderBody = () => {
    return services.map(({service_name, price }) => {
      return (
       <option>{service_name}</option>
      )
    })
  }
  return (
    <div className="SelectContainer">
      <div className="SelectView2" >
        <h3>Selecciona el trabajo: </h3>
        <select className="browser-default custom-select">
        <option>Choose your option</option>
         {renderBody()}
         </select>
      </div>
    </div>

  );
}


export default SelectPage;