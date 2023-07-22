import React, {useState} from "react";
import { Modal,Button,Form } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Editthemes=(props)=>{ 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [EditedThemeName,setEditedThemeName]= useState('');
    const [EditedThemePrice,setEditedThemePrice]= useState('');
    const [EditedThemedescription,setEditedThemedescription]= useState('');

  const handleEdit=()=>{
    const data = {
    themename : EditedThemeName,
    themeprice : EditedThemePrice,
    themedetails : EditedThemedescription
}
const id = props.themeid;
  axios.put('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/theme/admin/editTheme/'+id,data)
  .then(response => {
    if(response.data==="Theme edited"){
      toast.success("Theme Edited");
   handleClose();
   props.onThemeEdited();
    }
  })
  .catch(error => 
    toast.warning("Theme Not Edited"));
}

  return (
    <>
      <Button variant="" onClick={handleShow}>
      <FaRegEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Text className="text-muted">
            <h1>Edit Theme</h1>
            </Form.Text>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the theme name" id="enterThemeName" 
            onChange={(e)=>setEditedThemeName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control type="number" placeholder="Enter the theme price" id="enterThemePrice"  
            onChange={(e)=>setEditedThemePrice(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the theme description" id="enterThemeDescription" 
            onChange={(e)=>setEditedThemedescription(e.target.value)}  />
        </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer><Button variant="primary" onClick={handleEdit} id="update">
        Update
      </Button>
        </Modal.Footer>
      </Modal>

      </>
      )
}

export default Editthemes;