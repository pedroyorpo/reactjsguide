import React, {useEffect,useState} from 'react'
import Tableproducts from '../components/Tableproducts';
import axios from 'axios'


function Productsales() {
    const [productlist,setProductlist] = useState([]);
    const [usersLoaded, setUsersLoaded] = useState(false);
    
    function fnsetprodstatus(prodid,status){
        var data = new FormData();
        data.append("method","fnSetProdStatus");
        data.append("prodid",prodid);
        data.append("status",status);
        axios.post("//localhost/reactapi/fnModel.php",data)
        .then(function(response){
            setUsersLoaded(true);
        })
    }
    useEffect(()=>{
        var data = new FormData();
        data.append("method","fnGetProductlist");
        axios.post("//localhost/reactapi/fnModel.php",data)
        .then(function(response){
            setProductlist(response.data);
            setUsersLoaded(false);
        })
    },[usersLoaded])
    return (
        <div className="container">
            <h3 style={{ fontSize:'30px' }}>HeRenz Pizza Products</h3>
            <Tableproducts proplist={productlist} setprodstatus={fnsetprodstatus}  />
        </div>
    )
}



export default Productsales
