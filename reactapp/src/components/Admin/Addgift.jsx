import React,{useState} from "react";
import axios from "axios";
import { Form ,Button} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addgift = (props)=>{
   const [GiftImage,setgiftImage]=useState('');
   const [GiftName,setgiftName]=useState('');
   const [GiftPrice,setgiftPrice]=useState('');
   const [GiftQuantity,setgiftQuantity]=useState('');
   const [GiftDetails,setgiftDetails]=useState('');

   const handlegiftName = (e) =>{
          setgiftName(e.target.value);
   }
   const handlegiftImage= (e) =>{
    setgiftImage(e.target.value);
    }   
    const handlegiftPrice = (e) =>{
      setgiftPrice(e.target.value);
    }
    const handlegiftQuantity = (e) =>{
      setgiftQuantity(e.target.value);
    }
    const handlegiftDetails = (e) =>{
      setgiftDetails(e.target.value);
    }

    const handleAddgift= (event)=>{
      event.preventDefault();
        const giftData = {
          giftName : GiftName,
          giftImageUrl : GiftImage,
          giftprice : GiftPrice,
          giftDetails : GiftDetails,
          giftQuantity : GiftQuantity
        }
        if(giftData.giftName!=="" && giftData.giftImage!=="" && giftData.giftPrice!=="" && giftData.giftDetails!==""){
          const url = "https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/gift/admin/addGift";
          axios.post(url,giftData).then((result)=>{
            if(result.data==="Gift added")
            toast.success("Gift Added");
            props.onGiftAdded(); 
          }).catch((error)=>{
            toast.warning("Gift Not Added");
          })
        }
         

      }
    return(
        <Form>
          
    <Form.Text className="text-muted">
          <h1>Add Gift</h1>
        </Form.Text>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the gift name" id="enterGiftName" onChange={handlegiftName} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the gift price" id="enterGiftPrice" onChange={handlegiftPrice} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the gift image URL" id="enterGiftImageUrl" onChange={handlegiftImage} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the product quantity" id="enterGiftQuantity" onChange={handlegiftQuantity} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the gift Details" id="enterGiftDetails" onChange={handlegiftDetails} />
      </Form.Group>
      <Button  type="submit" id="addGiftButton" onClick={handleAddgift}>
        ADD
      </Button>
    </Form>
    )
}
export default Addgift;
