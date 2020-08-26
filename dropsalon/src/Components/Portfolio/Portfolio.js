import React from 'react'
import './Portfolio.css'
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
            <div className="row">
                <div className="col-md-12">

                    <div id="mdb-lightbox-ui"></div>

                    <div className="mdb-lightbox">
                        

                        <figure className="col-md-4">
                        
                                <img alt="trabajo" src={pic1} className="img-fluid" />
                        
                        </figure>

                        <figure className="col-md-4">
                           
                                <img alt="trabajo" src={pic2} className="img-fluid" />
                          
                        </figure>

                        <figure className="col-md-4">
                            
                                <img alt="trabajo" src={pic3} className="img-fluid" />
                          
                        </figure>

                        <figure className="col-md-4">
                            <img alt="trabajo" src={pic4} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                           
                                <img alt="trabajo" src={pic5} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                               <img alt="trabajo" src={pic6} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                             <img alt="trabajo" src={pic7} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                              <img alt="foto" src={pic8} className="img-fluid" />
                           
                        </figure>

                      
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Portfolio;