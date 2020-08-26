import React from 'react'
import './Portfolio.css'
import Lightbox from 'react-lightbox-component'
import pic1 from "../../Assets/pic1.jpg";
import pic2 from "../../Assets/pic2.jpg";
import pic3 from "../../Assets/pic3.jpg";
import pic4 from "../../Assets/pic4.jpg";
import pic5 from "../../Assets/pic5.jpg";
import pic6 from "../../Assets/pic6.jpg";
import pic7 from "../../Assets/pic7.jpg";
import pic8 from "../../Assets/pic8.jpg";


function Portfolio() {
    return (

        <div>
            <h1>Galeria de trabajos </h1>
            <Lightbox images={ [
      {
        src: '../../Assets/pic1.jpg',
        title: 'Ropy pahoehoe',
        description: 'By Tari Noelani Mattox. Licensed under Public Domain via Commons'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg',
        title: 'Pyroclastic flows at Mayon Volcano',
        description: 'By C.G. Newhall. Licensed under Public Domain via Commons'
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg',
        title: 'Okataina',
        description: 'By Richard Waitt. Licensed under Public Domain via Commons'
      }
    ] } 
    thumbnailWidth='150px'
    thumbnailHeight='150px'
    showImageModifiers={false}/>
        </div>


    );
}

export default Portfolio;