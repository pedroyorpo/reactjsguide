
import classes from './addproduct.module.css'
import React, {useRef,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert2';


function AddProduct() {

    const title = useRef();
    const qty = useRef();
    const description = useRef();
    const [file,setFile] = useState({});
    const category = useRef();
    const size = useRef();
    const price = useRef();
    const navigate = useNavigate();
   
   

     function AddProducts() {
        var data = new FormData();
        data.append("method","fnAddproducts");
        data.append("title",title.current.value);
        data.append("qty",qty.current.value);
        data.append("description",description.current.value);
        data.append("file",file);
        data.append("category",category.current.value);
        data.append("size",size.current.value);
        data.append("price",price.current.value);


        // axios.post("//localhost/reactapi/fnModel.php",data)
        axios.post("//localhost/reactapi/fnModel.php",data,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
            .then(function(response){
             
                    title.current.value="";
                    qty.current.value="";
                    description.current.value="";
                    category.current.value="";
                    size.current.value="";
                    price.current.value="";
    
                    
                swal.fire({
                    icon: 'success',
                    text: 'Add Product Successfully Saved'
                 
                  })
                navigate("/myproduct");
               


             })
           
     }
     function handlefile(event){
        setFile(event.target.files[0]);
    }
    

    return (
        <div>
            <h2> AddProduct</h2>
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8">
                       
                        <div  className={classes.formwrapper} >
                            <input type="text" ref={title} className={'form-control  '+ classes.input} placeholder="Enter Title:" />
                            <input type="text" ref={size} className={'form-control  '+ classes.input} placeholder="Input size:" />
                            <input type="text" ref={price} className={'form-control  '+ classes.input} placeholder="Input Price:" />
                            <input type="text" ref={category} className={'form-control '+ classes.input} placeholder="Category:" />
                            <textarea ref={description} className={'form-control '+classes.input} placeholder="Description"></textarea>
                            <input type="text" ref={qty} className={'form-control '+ classes.input} placeholder="Qty" />
                            <input type="file" name="file" className={'form-control' + classes.input} onChange={handlefile}  />
                                                  
                            <button value="button" onClick={AddProducts} style={{float:"left",paddingRight:"10px"}}  className="btn btn-lg btn-primary">Add product</button>
                            <button value="button" style={{float:"left",paddingLeft:"10px",position:"relative",left:"20px"}} className="btn btn-lg btn-danger">Cancel</button>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

              
            </div>
        </div>
    )
}

export default AddProduct
