import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import NavigationMenu from './Navbar';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import EditOrder from './Editorder';
import DeleteOrder from './Deleteorder';
import './Myorders.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myorders=()=> {
  const email = localStorage.getItem("email");
  const [placedOrders,setPlacedOrders]=useState([]);
  const [effect,setEffect]=useState('');
  
  const fetchOrders=()=>{
    axios.get('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/order/user/getOrdersCart', {
      params: {
        userEmail: email
      }
      }).then((response) => {
      setPlacedOrders(response.data);
      }).catch((error)=>{
        toast.warning(error)
      })
  }
  useEffect(()=>{fetchOrders();},[])
  useEffect(
    ()=>{
     fetchOrders();
    },[effect])
    const navigate = useNavigate();



     const handlePay=()=>{
      //Add order api
      axios.post('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/order/user/addOrders', email, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          
          if(response.data==="Order added"){
            toast.success("Order Added");
            navigate("/review");
          }
        })
        .catch((error) => {
          toast.warning("Error")
        });
    }

  return (
    <div className="orderpage">
      <div>
        <NavigationMenu />
      </div>
      <ToastContainer/>
      <div  id="gridOrderBody">
      <Table  hover>
        <thead>
          <tr>
            <th>Gift Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { 
           placedOrders.map((order) => (
            <tr key={order.orderId} id={order.orderId}>
              <td>{order.giftName}</td>
              <td>{order.giftPrice}</td>
              <td>{order.orderQuantity}</td>
              <td>
                
               <span ><EditOrder orderData = {order} onOrderEdited={() => setEffect(Date.now())}/> </span>
               <span ><DeleteOrder orderId={order.orderId} onOrderDeleted={() => setEffect(Date.now())}/> </span>   
                
              </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
      
      </div>
      <Button variant='dark' id="payButton" onClick={()=>handlePay()}>Pay</Button>
    </div>
  );
}
export default Myorders;