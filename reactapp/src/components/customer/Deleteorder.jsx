import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { AiFillDelete} from "react-icons/ai";

const DeleteOrder=(props)=>{
    const orderId = props.orderId;
    const handleDelete=(id)=>{
    axios.delete("https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/order/user/deleteOrder/"+id).then(
        (response)=>{
         if(response.data==='order deleted'){
            props.onOrderDeleted();
         }
        }
    ).catch((error)=>{
        alert(orderId)
    }
    )
}
return(
    <Button variant="" onClick={()=>handleDelete(orderId)}><AiFillDelete/></Button>
)
}

export default DeleteOrder;