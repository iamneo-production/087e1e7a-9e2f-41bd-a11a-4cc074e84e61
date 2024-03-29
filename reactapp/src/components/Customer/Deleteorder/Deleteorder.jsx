import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { AiFillDelete} from "react-icons/ai";
import { toast } from 'react-toastify';
const DeleteOrder=(props)=>{
    const orderId = props.orderId;

    const handleDelete=(id)=>{
    axios.delete("https://8080-dafbecdaebfdaaaabadfbbdfdacbcefeddcbcbaffb.project.examly.io/user/deleteOrder/"+id).then(
        (response)=>{
         if(response.data==='order deleted'){
            toast.success("Order Deleted");
            props.onOrderDeleted();
         }
        }
    ).catch((error)=>{
        console.log(error);
    }
    )
}
return(
    <Button variant="" onClick={()=>handleDelete(orderId)}><AiFillDelete/></Button>
)
}

export default DeleteOrder;