import React from 'react'
import './About.css'




function About() {
    return (
        <div className="container">
            <div className="box1"> <img src={process.env.PUBLIC_URL + '/images/Logo.jpg'} alt="Logo del salon"/> </div>
              <div ClassName ="box2">
                <h2>Acerca de Nosotros</h2>
                <p>En Drop Salon queremos resaltar tu belleza, con un ambiente acogedor. 
                    Ubicado en Paseo Las colonias en la marginal constancia. Trabajamos una gran variedad de servicios... </p>
                    <div ClassName="container2">
                <h3>¿Porqué nosotros?</h3>
                  <div ClassName ="Box3">
                  <ul>
                         <li>Mejores en este campo</li>
                         <li>Te tratamos bien</li>
                  </ul>
                  </div>
                  <div className="Box4">
                    <ul>
                    <li>jteyktk   rhe</li>
                      <li>ejyt5k   ehteht</li>
                      <li>tekjk7  eheh </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

    );

}

export default About;