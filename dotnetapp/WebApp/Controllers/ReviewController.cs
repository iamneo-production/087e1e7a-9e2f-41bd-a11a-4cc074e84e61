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
    
    public class ReviewController : ControllerBase
    {   
    
              private readonly BusinessLayer bal = new BusinessLayer();

         [HttpGet]
    [Route("getreview")]
        public List<review> Get()
        {
            return bal.Get();
        }
        // POST: api/Review
        [HttpPost]
        
        [Route("insertreview")]
        public string Post(review r)
        {
          return bal.Postreview(r);
        }
    }
}