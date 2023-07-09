<<<<<<< HEAD
<<<<<<< HEAD
import logo from './logo.svg';
=======
=======
>>>>>>> DotNet_React_AE_Customized_NameBoard_Gift_2023-vasudha2
import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import { Admin, User } from './components/Auth/Auth';
import Order from './components/Customer/Order/Order';
import Placeorder from './components/Customer/Placeorder/Placeorder'
import Cart from  './components/Customer/Cart/Cart';
import HoamePage from './components/Customer/HoamePage/HoamePage';
import HomePage from "./components/Admin/HomePage/HomePage"
import Adminthemes from "./components/Admin/Adminthemes/Adminthemes";
import Orders from './components/Admin/Orders/Orders'; 
import Review from './components/User/Review/Review';
import AdminReview from "./components/Admin/Review/AdminReview";
import MyProfile from "./components/Customer/Myprofile/Myprofile";
<<<<<<< HEAD
>>>>>>> 7bb85aaa0df656ed55ed049478d067799ad7402d
=======
>>>>>>> DotNet_React_AE_Customized_NameBoard_Gift_2023-vasudha2
import './App.css';

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
=======
>>>>>>> DotNet_React_AE_Customized_NameBoard_Gift_2023-vasudha2
    <Router>
    <Routes>
        <Route  path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/> }/>
        
        <Route element={<User/>}>
        <Route path="/Homepage" element={<HoamePage/>} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/Cart" element={<Cart/> } />
        <Route path="/Myorders" element={<Order/> } />
        <Route path="/myprofile" element={<MyProfile/> }/>
        <Route path="/Review" element={<Review/>} />
        </Route>

        <Route element={<Admin/>}>
        <Route path="/Admingifts" element={ <HomePage/> } />
        <Route path="/Adminthemes" element={<Adminthemes/> } />
        <Route path="/Adminvieworders" element={<Orders/> } />
        <Route path="/AdminReview" element={<AdminReview/> } />
        </Route>

    </Routes>
    </Router>  
<<<<<<< HEAD
>>>>>>> 7bb85aaa0df656ed55ed049478d067799ad7402d
  );
}

export default App;
=======
  );
}

export default App;
>>>>>>> DotNet_React_AE_Customized_NameBoard_Gift_2023-vasudha2
