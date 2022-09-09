import React from 'react'

function Profile() {
    return (
        <div style={{marginTop:'30px',marginBottom:'30px'}}>
                         
                <div className="container">
                 <div className="row">
               
                     <div className="card" style={{width:'400px',position:'relative',left:'130px',height:'580px'}}>
                         <div className="col-md-12">
                            <img className="card-img-top" src="images/logo.png" alt="img" style={{width:'100%'}}/>
                            <div className="card-body">
                            <h4 className="card-title">HeRenz Pizza</h4>
                            <p className="card-text">Serving freshly baked Italian - Filipino Style Pizzas. Located in Katura, Cansubing, Buagsong, Cordova, Cebu</p>
                        
                        
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                See Details
                                </button>

                                <div className="modal fade" id="myModal">
                                    <div className="modal-dialog">
                                    <div className="modal-content">
                                    
                                    
                                        <div className="modal-header">
                                        <h4 className="modal-title">HeRenz Pizza</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                    
                                        <div className="modal-body">
                                           <div className="container-fluid">
                                               <div className="row">
                                                   <div className="col-md-12">
                                                     <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta</p>
                                                   </div>
                                               </div>
                                           </div>
                                        </div>
                                        

                                        <div className="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                        
                                </div>
                              </div>
                           </div>                     
                        </div>
                     </div>                   
                   </div> 
                  
                </div>
            </div>
        </div>
    )
}

export default Profile
