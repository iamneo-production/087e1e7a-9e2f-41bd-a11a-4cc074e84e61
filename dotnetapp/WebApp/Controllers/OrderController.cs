using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApp.Models;
using System.Data.SqlClient;
using System.Data;
using System.Xml.Linq;
namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class OrderController : ControllerBase
<<<<<<< HEAD
    {   
    

        private readonly BusinessLayer bal = new BusinessLayer();
=======
    {   private readonly BusinessLayer bal = new BusinessLayer();
>>>>>>> ed86e1a80104bc9a714eaed6fb2bdbfc379c90a4


        [HttpPost]
        [Route("user/addOrdersCart")]
        public string addOrdersCart(OrderModel order)
        {
            return bal.addOrdersCart(order);          

        }
        [HttpPost]
        [Route("user/addOrders")]
        public string addOrders([FromBody] string userEmail)
        {
           
           return bal.addOrders(userEmail);
        }
       
        [HttpGet]
        [Route("user/getOrdersCart")]
        public IActionResult viewPlacedOrders(string userEmail)
        {

           return bal.viewPlacedOrders(userEmail);
        }
       
        [HttpPut]
        [Route("user/editOrder/{orderId}")]
        public string editOrder(int orderId,  OrderModel order)
        {
            return bal.editOrder(orderId,order);
        }
        [HttpDelete]
        [Route("user/deleteOrder/{orderId}")]
        public string deleteOrder(int orderId)
        {
            return bal.deleteOrder(orderId);
        }
<<<<<<< HEAD
       
    }
=======

        [HttpGet]
        [Route("user/getallorders")]
        public IActionResult MyOrders(string userEmail)
        {

           return bal.MyOrders(userEmail);
        }

       
    }
    

         
>>>>>>> ed86e1a80104bc9a714eaed6fb2bdbfc379c90a4
}