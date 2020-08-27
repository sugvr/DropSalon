import React from 'react'
import './Portfolio.css'

import PhotoGallery from './Gallery/PhotoGallery'
import Dedos from './Gallery/Dedos'

function Portfolio() {
  return (

      <div>
      <h1>Galeria de trabajos </h1>
      <br />
      <br />
      <h3>Cosmetología</h3>
      <br />
      <PhotoGallery />
      <br />
      <br />
      <br />
      <br />
      <h3>Uñas</h3>
      <br />
      <Dedos />
    </div>


  );
}

export default Portfolio;