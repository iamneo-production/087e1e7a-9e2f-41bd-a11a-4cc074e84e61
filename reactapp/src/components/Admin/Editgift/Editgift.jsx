import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Editgift = (props) => {
  const gift = props.giftData;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [EditedGiftName,setEditedGiftName]= useState('');
    const [EditedGiftPrice,setEditedGiftPrice]= useState('');
    const [EditedGiftdetails,setEditedGiftdetails]= useState('');
    const [EditedGiftImageUrl,setEditedGiftImageUrl] = useState('');
    const [EditedGiftQuantity,setEditedGiftQuantity] = useState('');
  const handleEdit=()=>{

    const data = {
        giftName : EditedGiftName,
        GiftImageUrl : EditedGiftImageUrl,
        giftprice : EditedGiftPrice,
        giftDetails : EditedGiftdetails,
        giftQuantity : EditedGiftQuantity
       
}
const id = props.giftid;

  axios.put('https://8080-dcfcfccddeabadfbbdfdacbcefeddcbcbaffb.project.examly.io/admin/editGift/'+id,data)
  .then(response => {
    if(response.data==="Gift edited"){
      toast.success("Gift Edited");
      props.onGiftEdited();
    handleClose();
    }
  })
  .catch(error => toast.warning("Gift Not Edited"));
}

  return (
    <>
    <Button variant="" onClick={handleShow}><FaRegEdit /></Button>        
      <Modal show={show} onHide={handleClose} className="editgiftform">
        <Modal.Header closeButton>        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Text className="text-muted">
            <h1>Edit Gift</h1>
            </Form.Text>
            <lable>Gift Name:</lable>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the gift name" id="enterGiftName" defaultValue={gift.giftName}
            onChange={(e)=>setEditedGiftName(e.target.value)} />
            {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
        </Form.Group>
        
        <lable>Gift Price:</lable>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the gift price" id="enterGiftPrice" defaultValue={gift.giftPrice}
            onChange={(e)=>setEditedGiftPrice(e.target.value)}  />
            {priceError && <Form.Text className="text-danger">{priceError}</Form.Text>}
        </Form.Group>

        <lable>Gift Image Url:</lable>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the gift image url" id="enterGiftImageUrl" defaultValue={gift.giftImageUrl}  
            onChange={(e)=>setEditedGiftImageUrl(e.target.value)}  />
            {imageUrlError && <Form.Text className="text-danger">{imageUrlError}</Form.Text>}
        </Form.Group>

        <lable>Gift Quantity:</lable>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the gift quantity" id="enterGiftQuantity" defaultValue={gift.giftQuantity}  
            onChange={(e)=>setEditedGiftQuantity(e.target.value)}  />
            {quantityError && <Form.Text className="text-danger">{quantityError}</Form.Text>}
        </Form.Group>

        <lable>Gift Details:</lable>
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter the gift details" id="enterGiftDetails" defaultValue={gift.giftDetails}
            onChange={(e)=>setEditedGiftdetails(e.target.value)}  />
            {detailsError && <Form.Text className="text-danger">{detailsError}</Form.Text>}
        </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer><Button variant="primary" onClick={handleEdit} id="editGiftButton">
        Update
      </Button>
        </Modal.Footer>
      </Modal>

      </>
      )
}

export default Editgift;