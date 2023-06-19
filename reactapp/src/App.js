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
import ReviewForm from "./components/customer/Review";
import './App.css';


function App() {
    return (
    <Router>
    <Routes>
        <Route  path="/" element={<Login/>} />
        <Route path="/Signup" element={<Register/> }/>
        
        <Route element={<User/>}>
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/Myorders" element={<Myorders/> } />
        <Route path="/review" element={<ReviewForm/>}/>
        </Route>

        <Route element={<Admin/>}>
        <Route path="/Admingifts" element={ <AdminGifts/> } />
        <Route path="/Adminthemes" element={<AdminThemes/> } />
        <Route path="/Adminvieworders" element={<AdminViewOrders/> } />
        </Route>

    </Routes>
    </Router>  
    
  );
}

export default App;
