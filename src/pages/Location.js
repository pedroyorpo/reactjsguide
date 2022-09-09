import React from 'react'

function Location() {
    return (
        <div>
            
            <div className="container">
                <div className="row p-3">

                <h2 style={{position:'relative',left:'90px'}}>Location</h2>
                    <div className="col-md-12">
              
                       <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.1090041848956!2d123.93518101411279!3d10.252791871445309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99bed95385a35%3A0x9df56b3cca3f30f6!2sHeRenz%20Pizza!5e0!3m2!1sen!2sph!4v1638625748363!5m2!1sen!2sph" width="900" height="550" style={{position:'relative',left:'90px'}} allowfullscreen="" loading="lazy" />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Location
