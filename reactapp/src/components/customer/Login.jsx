import React,{ useState} from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import './Login.css';
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login=(props)=>{
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email : email,password : password }
        axios.post("https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/auth/user/login", data)
        .then((result) => {
              if(result.data === true){
                localStorage.setItem("email",email);
                localStorage.setItem("isAuth" ,true);
                localStorage.setItem("role" ,"User");
                navigate('/Homepage');
              }else {
                axios.post("https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/auth/admin/login", data)
                .then((result) => {
                      if(result.data === true){

                        localStorage.setItem("isAuth" ,true);
                        localStorage.setItem("role" ,"Admin");
                        navigate('/admingifts');
                    }
                    else
                    {
                      toast.warning("Invalid Email or Password");
                    }
                }).catch((error) => {toast.warning(error)});
              }
        }).catch((error) => {toast.warning(error)});  
    }; 
        
         

    return(
    <div>
        <h1 className="loginHead">Login</h1>
    <ToastContainer/>
        <div className="loginForm" data-testid="loginBox">
    <Form onSubmit={handleSubmit} >
        
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" data-testid="email" id="email" placeholder=" Enter email"   onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" data-testid="password" id="password" placeholder=" Enter Password"    onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" data-testid="loginButton" id="loginButton" >
        Login 
      </Button>
      <Form.Text className="text-muted">
          New User/Admin
          <a href='/signup' data-testid="signupLink" id='signupLink'>Signup</a>
        </Form.Text>
    </Form>
        </div>
    </div>    
    )
}

export default Login;
