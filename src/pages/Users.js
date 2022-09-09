import React,{useRef,useEffect,useState} from 'react';
import axios from 'axios'
import swal from 'sweetalert2'

function Users() {
 
    const name= useRef();
    const sex= useRef();
    const status= useRef();
    const [usersLoaded, setUsersLoaded] = useState(false);
    const [userdata, setUserData] = useState([]);
    const [userid,setUserId] = useState(0);
     
  function AddUser(){

    var data = new FormData();
    data.append("method","fnAddUser");
    data.append("name",name.current.value);
    data.append("sex",sex.current.value);
    data.append("status",status.current.value);
    data.append("userid",userid);

     //axios.post("http://localhost:8000/fnAddUser",data)
      axios.post("//localhost/reactapi/fnModel.php",data)
        .then(function(response){
              
            name.current.value=""; 
            sex.current.value="";
            status.current.value="";
            swal.fire({
                icon: 'success',
                title: 'User successfully ' + (userid === 0 ? "saved" : "updated"),
                showConfirmButton: true,
              });
            setUsersLoaded(true); 
            
    })
      
}

function deleteuser(userid){
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                var data = new FormData();
                data.append("method","fnDeleteUser");
                data.append("userid",userid);
                //    axios.post("http://localhost:8000/fnDeleteUser",data)
                axios.post("//localhost/reactapi/fnModel.php",data)
                .then(function(response){
                    setUsersLoaded(true);
                })
                swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
          })
        
    }

    
    function getUserById(userid){
        var data = new FormData();
        data.append("method","fnGetUserById");
        data.append("userid",userid);
        axios.post("//localhost/reactapi/fnModel.php",data)
        .then(function(response){
            name.current.value = response.data[0].name;
            sex.current.value = response.data[0].sex;
            status.current.value = response.data[0].status;
            setUserId(response.data[0].userid);
           
        })
    }


useEffect(()=>{
    var data = new FormData();
    data.append("method","fnGetAddUsers");
    // axios.get("http://localhost:8000/fnGetAddUsers",data)
    axios.post("//localhost/reactapi/fnModel.php",data)
    .then(function(response){
       
        setUsersLoaded(false);
        setUserData(response.data);
    });
},[usersLoaded])

    return (
        <div className="container">
            <div className="row p-3">
                         <div  style={{position:'relative',float:'left',right:'490px'}} >
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                Add Users
                                </button>
                                <div className="modal fade" id="myModal">
                                    <div className="modal-dialog modal-md">
                                    <div className="modal-content">    
                                        <div className="modal-header">
                                        <h4 className="modal-title">HeRenz Pizza</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>              
                                        <div className="modal-body">
                                           <div className="container">
                                               <div className="row p-3">
                                                    <div className="col-md-12">
                                                         <input type="text" ref={name} className='form-control' placeholder="Name:" /><br/>
                                                    </div> 
                                                    <div className="col-md-12">
                                                          <input type="text" ref={sex} className='form-control' placeholder="Gender:" /><br/>
                                                    </div>
                                                    <div className="col-md-12">                                        
                                                        <select  ref={status} className="form-select form-select-sm" aria-label=".form-select-sm example" placeholder="Select..">
                                                         
                                                            <option>User</option>
                                                            <option>Admin</option>
                                                        </select><br/>
                                                    </div>            
                                                    <div className="col-md-5">
                                                        <button value="button" onClick={AddUser} style={{float:"left",paddingRight:"10px"}}  className="btn btn-sm btn-primary">Add User</button>
                                                        <button value="button" style={{float:"left",paddingLeft:"10px",position:"relative",left:"20px"}} className="btn btn-sm btn-danger">Cancel</button>
                                                    </div>    
                                                   
                                               </div>
                                           </div>
                                        </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>            
                                   </div>
                               </div>
                           </div>                                   
                      </div> 
                   <div className="col-md-12">
                      <div className="row p-3">
                               <table border="1" className="table table-bordered table-hover " style={{position:'relative',left:'90px'}} >
                                  <thead className="bg-primary" style={{fontSize:'21px'}}>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Role</th>
                                        <th>Date</th>
                                        <th>Status</th>               
                                   </tr>
                                </thead>
                                <tbody style={{background:'beige',fontSize:'20px'}}>
                                {userdata.map((v)=>(
                                    <tr key={v.userid}>
                                        <td>{v.name}</td>  
                                        <td>{v.sex}</td>
                                        <td>{v.status}</td>
                                        <td>{v.userdate}</td>
     
                                    <td>
                                        <button style={{position:'relative',right:'15px'}} className="btn btn-md btn-danger btn-outline" onClick={() =>deleteuser(v.userid)}>Delete</button>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() =>getUserById(v.userid)}> Edit </button>

                                          
                                    </td>
                                    </tr>
                                ))}
                                </tbody>

                            </table>     
                        </div>
                   </div>
                 </div>        
           </div>
    )
  }

export default Users
