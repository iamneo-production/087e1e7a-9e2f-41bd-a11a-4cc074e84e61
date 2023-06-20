import React, { useState } from 'react';
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';
import './Review.css'
import { useNavigate } from 'react-router-dom';
import NavigationMenu from './Navbar';
import { FcApproval } from "react-icons/fc";

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  

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
        comments : comment,
        
    }
      const url = "https://8080-ecdbffcdccababadfbbdfdacbcfcecaabcfba.project.examly.io/review/insertreview";
      axios.post(url,data).then((result)=>{
        console.log(result.data);
        if(result.data==="inserted sucessfully")
        {
          navigate("/homepage");
        }
      }).catch((error)=>{
        console.log(error)
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
          value={comment}
          onChange={handleCommentChange}
          required/>
      </Form.Group>
      <Button type="submit" onClick={handleSubmit}>Submit Review</Button>
    </Form></div>
    </div>
  );
};

export default ReviewForm;
