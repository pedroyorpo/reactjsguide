import React from 'react'
import {Link, useNavigate, Outlet} from 'react-router-dom'
import classes from './Nav.module.css'
import {ImHome} from 'react-icons/im';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {BsCartFill} from 'react-icons/bs';
import {FaList} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {FaUsers} from 'react-icons/fa';
import {MdLocationPin} from 'react-icons/md';
import {RiLogoutCircleFill} from 'react-icons/ri'


function Nav() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }


    return (
        <div>  
            
                <div className={classes.sidebar}>
                    <div className={classes.imglogo} >
                       <img className="img-fluid" src="images/logo.png" width="150px" alt="img"/>
                    </div>
                  
                    <div style={{marginTop:'0px'}} />    
                    <Link to="/home" className="nav-link"><ImHome size="2em" />Dashboard</Link> 
                    <Link to="/addproduct" className="nav-link"><MdProductionQuantityLimits  size="2em"/> Add-Product</Link> 
                    <Link to="/myproduct" className="nav-link"><BsCartFill  size="2em" paddingRight="2px"/> My Product</Link>
                    <Link to="/sales" className="nav-link"><FaList  size="2em"/> Cart</Link>
                    <Link to="/users" className="nav-link"><FaUsers  size="2em"/> Users</Link> 
                    <Link to="/profile" className="nav-link"><CgProfile  size="2em"/> Profile</Link> 
                    <Link to="/location" className="nav-link"><MdLocationPin  size="2em"/> Location</Link> 
               </div>              
                <header className={classes.header}>
                    <div className={classes.logo}>HeRenz Pizza</div>
                    <button onClick={logout} style={{ background:"none", border:"0", position:'absolute', right:'3px',fontSize:'20px',fontWeight:'bold' }}><RiLogoutCircleFill size="2em"/>Logout</button>
               </header> 

            <Outlet />
        </div>
    )
}

export default Nav
