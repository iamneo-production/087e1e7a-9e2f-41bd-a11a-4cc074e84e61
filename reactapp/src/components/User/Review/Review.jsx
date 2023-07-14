import React, { useState } from 'react';
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';
import { useNavigate,useLocation } from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import NavigationMenu from '../../Customer/Navbar/Navbar'
import './Review.css';

const Review = () => {
  const [name, setName] = useState('');
  const [comments, setComment] = useState('');
  const location = useLocation();
  const orderId = location.state;
  console.log(orderId);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
         const data = {    
        name: name,
<<<<<<< HEAD:reactapp/src/components/User/Review/Review.jsx
        comments : comments,
        orderId : orderId
=======
        comments : comment,
        
>>>>>>> d5b2b3bc6804ed3188b8d914e37d9669d559f332:reactapp/src/components/customer/Review.jsx
    }
      const url = "https://8080-ecdbffcdccababadfbbdfdacbcfcecaabcfba.project.examly.io/insertreview";
      axios.post(url,data).then((result)=>{
        console.log(result.data);
        if(result.data==="inserted sucessfully")
        {
          navigate("/homepage");
        }
      }).catch((error)=>{
        console.log(error);
      })
    
    // Reset the form
    setName('');
    setComment('');
  };

  return (
    <div>
      <NavigationMenu/>
      <div className="ReviewForm">
        <FcApproval className="custom-icon" />
    <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter" id="name" 
          value={name}
          onChange={handleNameChange}
          required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} id="comment"
          data-testid="comments"
          value={comments}
          onChange={handleCommentChange}
          required/>
      </Form.Group>
      <Button type="submit" onClick={handleSubmit}>Submit Review</Button>
    </Form></div>
    </div>
  );
};

export default Review;
