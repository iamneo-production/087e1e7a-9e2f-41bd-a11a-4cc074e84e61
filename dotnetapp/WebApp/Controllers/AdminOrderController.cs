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
    [Route("api/[controller]")]
    [ApiController]
    public class AdminOrderController : ControllerBase
    {
        private readonly BusinessLayer bal = new BusinessLayer();

        [HttpGet]
        [Route("admin/getAllOrders")]