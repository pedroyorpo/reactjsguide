import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function ProtectedRoute() {

    if(!localStorage.getItem("userid")){
        return <Navigate to="/login" />
    }
    
    return <Outlet />
}

export default ProtectedRoute
