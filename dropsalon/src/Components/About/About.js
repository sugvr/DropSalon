import React from 'react'
import './About.css'
import logo from "../../Assets/Logo.jpg";

function About() {
  return (
    <div className="container">
      <div className=" box1"> <img src={logo} alt="Logo del salon" /> </div>
      <div ClassName=" box2">
        <h2>Acerca de Nosotros</h2>
        <p>En Drop Salon queremos resaltar tu belleza, con un ambiente acogedor.
                    Ubicado en Paseo Las colonias en la marginal constancia. Trabajamos una gran variedad de servicios... </p>
        <br />

        <h3>¿Porqué nosotros?</h3>
        <div className="box3">

          <div>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );

}

export default About;