import React, { Component } from 'react';
import './SelectPro.css'

class SelectPage extends Component {
  render () {
    return(
      <div className= "SelectView">
          <h3>Selecciona el profesional: </h3>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    );
  }
}

export default SelectPage;