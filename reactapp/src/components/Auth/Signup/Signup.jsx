import React, { useState } from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button ,Row ,Col ,Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup=()=>{
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [userRole, setUserRole] = useState("User");

  const navigate = useNavigate();
  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!userName) {
      errors.userName = 'Name is required';
    }
    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if  (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }
    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    // Mobile number validation
    if (!mobileNumber) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number';
    }
    setErrors(errors);
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (validateForm()) {
        const data = {
          
          email : email,
          password : password,
          username :userName,
          mobilenumber : mobileNumber,
          userrole : userRole,
      }
        
        const url = "https://8080-affdbaabdcabfabadfbbdfdacbcefeddcbcbaffb.project.examly.io/user/addUser";
        axios.post(url,data).then((result)=>{
          console.log(result.data);
          if(result.data === "User Added" || result.data==="user exists"||result.data==='Admin Added'){
            navigate("/");
          }
        }).catch((error)=>{
          toast.warning("Enter all the fields");
        })
      } else {
        // Form is not valid, handle errors
        toast.warning('Form is not valid');
      }
    };
        return(     
          <div className="Signup">
            <ToastContainer/>
          <Row className="justify-content-center align-items-center" style={{ height: '100%',width:'100%' }}>
          {/*Col xs={12} md={8} lg={4} ><div className="loginImg">
            <img src='' 
             alt="LoginImage" height={'500px'} /></div>
          </Col>
    <Col xs={1}  ></Col>*/}
        <Col xs={12} md={8} lg={4} >
        <div className="SignupForm" >
        <Form onSubmit={handleSubmit}>
        
        <Form.Group className="d-grid justify-content-center mb-3">
          <Form.Text><h4 style={{ }}>Register</h4></Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" >
        <Form.Select id='admin/user' value={userRole} onChange={(e)=> setUserRole(e.target.value)}>
        <option id='Admin' value="Admin">Admin</option>
        <option id='User' value="User">User</option>
        </Form.Select>
        {errors.userRole && <span>{errors.userRole}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >      
        <Form.Control  type="text" id="email" data-testid="email" placeholder=" Enter Email" onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span>{errors.email}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Control type="text" id="username"  data-testid="username" placeholder=" Enter Username"  onChange={(e) => setuserName(e.target.value)} required />
        {errors.userName && <span>{errors.userName}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Control type="text" id="mobileNumber"  data-testid="mobileNumber" placeholder=" Enter Mobile Number"  onChange={(e) => setMobileNumber(e.target.value)} required />
        {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Control  type="password" id="password"  data-testid="password" placeholder="Enter Password"  onChange={(e) => setPassword(e.target.value)} required />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Control type="password" id="confirmPassword"  data-testid="confirmPassword" placeholder=" Confirm Password"   onChange={(e) => setConfirmPassword(e.target.value)} required />
        </Form.Group>
        <div className="d-grid ">
            <Button variant="success" type="submit"  data-testid="submitButton" onClick={handleSubmit}  id="submitButton" >Submit</Button>
        </div>
       
        <Form.Group className="d-grid justify-content-center mb-3 py-3">
        <Form.Text>
               Already a user? <a href='/' id='signinLink'  data-testid="signinLink">Login</a>
        </Form.Text>
        </Form.Group>

       

        </Form>
        </div>
        </Col>
      </Row>
      </div>
    )
}
export default Signup;