import React, { useState ,useEffect} from "react";
import NavigationMenu from "./NavMenu";
import { Table } from "react-bootstrap";
import axios from "axios";
import './Adminvieworders.css'

const AdminViewOrders=()=>{
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
          axios.get('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/order/admin/getallorders').then((response) => {
            console.log(response.data)
      setOrders(response.data);
    });

},[])

    return(
        <div>
            
                <NavigationMenu />
            <div className="adminorders">
            <Table  hover className="adminorderstable" >
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>User Id</th>
                        <th>Gift Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order)=>(
                                <tr key={order.orderId}>
                                <td id="orderid">{order.orderId}</td>
                                <td id="username" >User{order.id}</td>
                                <td id="giftName">{order.giftName}</td>
                                <td id="giftprice">{order.giftPrice}</td>
                                <td id="giftQuantity">{order.orderQuantity}</td>
                                </tr>
                            ))}
                    </tbody>                        
                
            </Table>
            </div>
        </div>
    )
}

export default AdminViewOrders;