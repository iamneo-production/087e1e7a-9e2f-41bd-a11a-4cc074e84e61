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
namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class AuthController : ControllerBase
    {   
        private readonly BusinessLayer bal = new BusinessLayer();
       
        [HttpPost]
        [Route("user/login")]
        public bool isUserPresent(LoginModel lm)
        { 
            return bal.isUserPresent(lm);
        }
        [HttpPost]
        [Route("admin/login")]
        public bool isAdminPresent(LoginModel lm)
        { 
           return bal.isAdminPresent(lm);
        }
        [HttpPost]
        [Route("user/signup")]
        public string saveUser(UserModel user)
        {
           return bal.saveUser(user);
            
        }
        [HttpPost]
        [Route("admin/signup")]
        public string saveAdmin(UserModel user)
        {
           return bal.saveAdmin(user);
        }
    }
}