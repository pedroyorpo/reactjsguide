import React from 'react'

function Tableproducts(props) {

       
        
    function login(){
        
    }

    return (
        <div className="container">
              <div style={{ width:"100px", marginTop:"500px", margin:"500px auto",left:"200px",float:"left" }}></div>
                  
                   <div className="col-md-12">
                      <div className="row">
                                <div className="col-md-5">
                                  <form className="d-flex" style={{position:'relative',left:'700px',marginBottom:'5px',padding:'20px'}}>
                                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                                            <button  onClick={login}className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                                  </form>
                               </div>
                               <table border="4" className="table table-bordered table-hover " >
                                  <thead className="bg-primary" style={{fontSize:'25px'}}>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Qty</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Stock</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                   </tr>
                                </thead>
                                <tbody style={{background:'beige',fontWeight:'bold',fontSize:'20px'}}>
                                {props.proplist.map((v)=>(
                                  
                                    <tr key={v.userid}>
                                        <td>{v.title}</td>
                                        <img className="img-fluid" src={'//localhost/reactAPI/uploads/'+v.image}  width="100%" alt="img"/> 
                                        <td>1</td>
                                        <td>{v.size}</td>
                                        <td>{v.price}</td>
                                        <td>{v.description}</td>
                                        <td>{v.category}</td>
                                        <td>{v.qty}</td>
                                        <td>{v.productdate}</td>

                                        <td>
                                           
                                             <button onClick={() =>props.setprodstatus(v.userid)}className="btn btn-md btn-danger btn-outline"><b>X</b></button>
                                          
                                        </td>
                                    </tr>
                                ))}
                                </tbody>

                            </table>     
                        </div>
                   </div>
             </div>
    )
}

export default Tableproducts
