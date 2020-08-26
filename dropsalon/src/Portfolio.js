import React from 'react'
import './Portfolio.css'
function Portfolio() {
    return (
        <div>
            <h1>Galeria de trabajos </h1>
            <div className="row">
                <div className="col-md-12">

                    <div id="mdb-lightbox-ui"></div>

                    <div className="mdb-lightbox">

                        <figure className="col-md-4">
    
                                <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic1.jpg'} className="img-fluid" />
                            
                        </figure>

                        <figure className="col-md-4">
                           
                                <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic2.jpg'} className="img-fluid" />
                          
                        </figure>

                        <figure className="col-md-4">
                            
                                <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic3.jpg'} className="img-fluid" />
                          
                        </figure>

                        <figure className="col-md-4">
                            <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic4.jpg'} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                           
                                <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic5.jpg'} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                               <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic6.jpg'} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                             <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic7.jpg'} className="img-fluid" />
                           
                        </figure>

                        <figure className="col-md-4">
                              <img alt="picture" src={process.env.PUBLIC_URL + '/images/pic8.jpg'} className="img-fluid" />
                           
                        </figure>

                      
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Portfolio;