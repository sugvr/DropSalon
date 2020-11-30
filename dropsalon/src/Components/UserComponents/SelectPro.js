import React, { useState, useEffect } from 'react';
import './SelectPro.css'
import axios from 'axios';

const URL = 'http://localhost:4000/services1'

const SelectPage = () => {
  const [name, setService] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {

    const response = await axios.get(URL)
    setService(response.data)
  }


  const renderBody = () => {
    return name && name.map(({ service_name, price }) => {
      return (
       
        <select className="browser-default custom-select">
        <option>Choose your option</option>
        <option>{service_name}</option>
      </select>
        
       
        
      )
    })
  }
  return (
    <div className="SelectContainer">
      <div className="SelectView2" >
        <h3>Selecciona el trabajo: </h3>
         {renderBody()}
      </div>
    </div>

  );
}


export default SelectPage;