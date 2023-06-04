import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Homepage from "./components/customer/Homepage";
import AdminGifts from "./components/Admin/Admingifts";
import AdminThemes from "./components/Admin/Adminthemes";
import Myorders from "./components/customer/Myorders";
import AdminViewOrders from "./components/Admin/Adminvieworders";
import Login from "./components/customer/Login";
import Register from "./components/customer/Signup";
import { Admin, User } from "./components/customer/Auth";
import Placeorder  from "./components/customer/Placeorder";
import Place from "./components/customer/a";
import PlaceOrderForm from "./components/customer/order[1]";

function App() {

  return (
    
    <Router>
    <Routes>
        <Route  path="/" element={<Login/>} />
        
        <Route path="/Signup" element={<Register/> }/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/placeorder" element={<Placeorder />} />

        
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/Myorders" element={<Myorders/>} />

        <Route path="/Admingifts" element={ <AdminGifts/> } />
        <Route path="/Adminthemes" element={<AdminThemes/>} />
        <Route path="/Adminvieworders" element={<AdminViewOrders/> } />

    
    </Routes>
    </Router>  
    
  );
}

export default App;
