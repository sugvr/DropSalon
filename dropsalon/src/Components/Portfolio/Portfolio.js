import React from 'react'
import './Portfolio.css'

import PhotoGallery from './Gallery/PhotoGallery'
import Dedos from './Gallery/Dedos'

function Portfolio() {
  return (

    <div>
      <h1 className="gallery-header">Galeria de trabajos </h1>
      <br />
      <br />
      <h3 className="gallery-title">Cosmetología</h3>
      <br />
      <div className="gallery-container">
        <PhotoGallery />
      </div>

      <br />
      <br />
      <br />
      <br />
      <h3 className="gallery-title">Uñas</h3>
      <br />
      <div className="gallery-container">
        <Dedos />
      </div>
    </div>


  );
}

export default Portfolio;