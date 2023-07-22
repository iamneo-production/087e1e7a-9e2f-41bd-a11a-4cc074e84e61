import React,{ useState} from "react";
import {Button,Row,Col, Form,InputGroup } from "react-bootstrap";
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';



const Login=(props)=>{
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email : email,password : password }
        axios.post("https://8080-afafecaabdbcabadfbbdfdacbcefeddcbcbaffb.project.examly.io/user/login", data)
        .then((result) => {
              if(result.data === true){
                localStorage.setItem("email",email);
                localStorage.setItem("isAuth" ,true);
                localStorage.setItem("role" ,"User");
                navigate('/Homepage');
              }else {
                axios.post("https://8080-afafecaabdbcabadfbbdfdacbcefeddcbcbaffb.project.examly.io/admin/login", data)
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
      <div className="Login">
        <ToastContainer/>
          <Row className="justify-content-center align-items-center" style={{ height: '100%',width:'100%' }}>
          {/*Col xs={12} md={8} lg={4} ><div className="loginImg">
            <img src='' 
             alt="LoginImage" height={'500px'} /></div>
          </Col>
    <Col xs={1}  ></Col>*/}
        <Col xs={12} md={8} lg={4} >
          <div className="loginForm">
            <Form onSubmit={handleSubmit} >
    <Form.Group className="d-grid justify-content-center">
          <Form.Text><h4>Login</h4>
            </Form.Text>
            </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address:</Form.Label>
        <InputGroup>
      <InputGroup.Text> <FiMail /> </InputGroup.Text>
        <Form.Control type="text" data-testid="email" id="email" placeholder=" Enter email"   onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <InputGroup>
    <InputGroup.Text>
      <RiLockPasswordFill />
    </InputGroup.Text>
        <Form.Control
            type={showPassword ? 'text' : 'password'}
            data-testid="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Show Password"
            onChange={()=>setShowPassword(!showPassword)}
          />
        </Form.Group>
      <div className="d-grid ">
        <Button variant="primary" type="submit" data-testid="loginButton" >
          Login 
        </Button>
        </div>
        
        <Form.Group className="d-grid justify-content-center mb-3 py-3">
          <Form.Text>
            New User/Admin? 
            <a href='/signup' data-testid='signupLink' id="signupLink" >Signup</a></Form.Text>
            </Form.Group>
    </Form>
           </div>
        </Col>
      </Row>
    </div>
    )
}

export default Login;