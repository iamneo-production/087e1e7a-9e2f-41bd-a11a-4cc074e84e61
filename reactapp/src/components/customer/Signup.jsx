import React, { useState } from 'react';
import './Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register=()=>{
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
    } else if (!/\S+@\S+\.\S+/.test(email)) {
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
        // Form is valid, you can proceed with form submission or further processing
        const url = "https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/user/user/addUser";
        axios.post(url,data).then((result)=>{
          console.log(result.data);
          if(result.data === "User Added" || result.data==="user exists"||result.data==='Admin Added'){
            navigate("/");
          }
        }).catch((error)=>{
          alert(error);
        })
      } else {
        // Form is not valid, handle errors
        toast.warning('Form is not valid');
      }
    };
        return(     
        <div>
          <ToastContainer/>
            <h1 className="loginHead">Register</h1>
        <div className="SignupForm" >
        <Form onSubmit={handleSubmit}>
        <Form.Select id='admin/user' value={userRole} onChange={(e)=> setUserRole(e.target.value)}>
        <option >Enter Admin/User</option>
        <option id='Admin' value="Admin">Admin</option>
        <option id='User' value="User">User</option>
        </Form.Select>
        {errors.userRole && <span>{errors.userRole}</span>}
            
        <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="text" id="email" placeholder=" Enter email" onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span>{errors.email}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" id="username" placeholder=" Enter Username"  onChange={(e) => setuserName(e.target.value)} required />
        {errors.userName && <span>{errors.userName}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" id="mobileNumber"  placeholder=" Enter Mobilenumber"  onChange={(e) => setMobileNumber(e.target.value)} required />
        {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" id="password" placeholder=" Password"  onChange={(e) => setPassword(e.target.value)} required />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" id="confirmPassword" placeholder=" Confirm Password"   onChange={(e) => setConfirmPassword(e.target.value)} required />
        </Form.Group>
        <div id="button">
           <Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit} id="submitButton" >Submit</Button>
          </Form.Group>

           </div>
       <br/>
        <div id='text'>
        <Form.Text className="text-muted">
               Already a user? <a href='/' id='signinLink'>Login</a>
        </Form.Text>

        </div>

        </Form>
        </div>
        </div>
    )
}
export default Register;