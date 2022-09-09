import React from 'react'
import axios from 'axios'
import './login.css';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2';
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'

  
function Login() {
          const navigate = useNavigate();
          const login = (e) => {

              e.preventDefault();
              const data = new FormData(e.target);
              data.append("method","generateToken");
              axios.post("//localhost/reactAPI/",data)
              .then(function(r){
                  if(r.data === "invalid"){
                      swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Your Email and Password are invalid!'
                      
                        })
                  }
                  else{

                      localStorage.setItem("token",r.data.token);
                      localStorage.setItem("userid",r.data.userid);
                     
                      swal.fire({
                          icon: 'success',
                          text: 'Login successfully'
                      
                        })
                      navigate("/home");
                  }
              })
          }

    return (
        
              <div className="container">
                  <div style={{ width:"400%", marginTop:"50px",float:"right", paddingLeft:"600px" }}></div>
                    <div className="row px-3">
                      <div className="col-lg-12 col-xl-12 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex">
                            <img className="img-fluid" src="/images/logo.png" style={{height:"100%",position:"relative",left:"150px",width:"60%"}} alt="img" />
                        </div>
                
                        <div className="card-body">
                          <h4 className="title text-center mt-4">
                            Login into account
                          </h4>
                          <form noValidate onSubmit={login}>
                              <div className="form-input">
                                <span><MdEmail /></span>
                                <input type="email" name="email" placeholder="Email Address"/>
                              </div>
                              <div className="form-input">
                              <span><RiLockPasswordFill /></span>
                                <input type="password" name="pass" placeholder="Password" required />
                              </div>
                  
                              <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="cb1" name="" />
                                  <label className="custom-control-label" for="cb1">Remember me</label>
                                </div>
                              </div>
                  

                              <div className="mb-3">
                            <button type="submit" className="btn-primary btn btn-block text-uppercase">
                              Login
                            </button>
                              </div>
         
                        </form>
                      </div>
                  </div>
                </div>
              </div>
   )
}

export default Login
