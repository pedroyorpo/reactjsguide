import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Productsales from './pages/Productsales'
import AddProduct from './pages/AddProduct'
import MyProduct from './pages/MyProduct.js'
import Profile from './pages/Profile'
import Users from './pages/Users'
import Location from './pages/Location'
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={ <Login /> } />
            <Route element={ <ProtectedRoute /> }>
              <Route element={ <Nav /> }>
              
                <Route path="/home" element={ <Home /> } />
                <Route path="/sales" element={ <Productsales /> } />
                <Route path="/addproduct" element={ <AddProduct /> } />
                <Route path="/profile" element={ <Profile /> } />
                <Route path="/myproduct" element={ <MyProduct /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/location" element={ <Location /> } />
                <Route path="*" element={ <PageNotFound /> } />
              </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
