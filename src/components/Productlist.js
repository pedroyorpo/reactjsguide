import React from 'react'
import classes from './Productlist.module.css'



function Productlist(props) {
   
    return (
        <div>
            
            
       
             <div className="container">
               <div className="row">

                 {props.proplist.map((v) =>(     
                      <div className=" col-12 col-sm-3 my-2  " >  
                        <div className={classes.wrapper}>  
                                
                             <div className="card">
                             <div className={classes.image}>
                                   <img className="img-fluid" src={'//localhost/reactAPI/uploads/'+v.image}  width="100%" alt="img"/> 
                              </div>
                            </div>
                        
                            <div className="d-flex justify-content-between align-items-center">
                            <div className={classes.productcontent}>
                               
                                <div className={classes.title}>
                                    {v.title}
                                </div>
                                <div className={classes.size}>
                                    <p>Size:{v.size} inches</p>
                                </div>
                                <div className={classes.price}>
                                   <p>Php{v.price} </p>
                                </div>
                               
                                
                
                                <div className={classes.addtofav}>
                            
                                <button value="button" className="btn btn-md btn-primary"  onClick={() => props.setprodstatus(v.userid)}>Add to Cart</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                     ))}
                   
                    </div>

                </div>
                
              
     
            
        </div>
     
    )
}

export default Productlist
