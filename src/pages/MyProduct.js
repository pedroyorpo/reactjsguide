import React, {useEffect,useState} from 'react'
import Productlist from '../components/Productlist';
import classes from './Myproducts.module.css'
import axios from 'axios'


function MyProduct() {
    const [productlist,setProductlist] = useState([]);
    const [usersLoaded, setUsersLoaded] = useState(false);
    const[search,setSearch] = useState([]);

    function setprodstatus(prodid){
        var data = new FormData();
        data.append("method","fnSetProdStatus");
        data.append("prodid",prodid); 
      
        axios.post("//localhost/reactapi/fnModel.php",data)
        .then(function(response){
            setUsersLoaded(true);
        })
    }

    useEffect(()=>{
        var data = new FormData();
        data.append("method","fnGetProducts");
        
        axios.post("//localhost/reactapi/fnModel.php",data)
        .then(function(response){
            setProductlist(response.data);
            setSearch('');
            setUsersLoaded(false);
        });
    },[usersLoaded])

    return (
        <div>
            <div className={'container ' + classes.mt40}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className={classes.pageTitle}>All Productlist</h3>
                    </div>
                </div> 
                <Productlist proplist={productlist} setprodstatus={setprodstatus} search={search} />
            </div>
        </div>
    )
}

export default MyProduct
