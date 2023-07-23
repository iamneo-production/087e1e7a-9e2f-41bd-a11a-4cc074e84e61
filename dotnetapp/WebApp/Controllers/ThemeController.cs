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
   
    public class ThemeController : ControllerBase
    {   
    
        private readonly BusinessLayer bal = new BusinessLayer();
        
        [HttpGet]
        [Route("admin/getTheme")]
        public IActionResult GetAllThemes()
        {
            return Ok(bal.GetAllThemes());
        }

        

        [HttpPost]
        [Route("admin/addTheme")]
        public string addTheme(ThemeModel data)
        {
           return bal.addTheme(data);
        }
        [HttpDelete]
        [Route("admin/deleteTheme/{themeId}")]
        public string DeleteTheme(int themeId)
        {
            return bal.DeleteTheme(themeId);
        }
        [HttpPut]
        [Route("admin/editTheme/{themeId}")]
        public string EditTheme(int themeId, ThemeModel data)
        {
            return bal.EditTheme(themeId,data);
        }



        //user side theme selection and insertion
        [HttpGet]
        [Route("user/getAllThemes")]
        public IActionResult GetThemes()
        {
            return Ok(bal.GetThemes());
        }

        [HttpPost]
        [Route("user/selectTheme")]
        public string selectTheme(ThemeModel data)
        {
            return bal.selectTheme(data);
        }

    }
} 