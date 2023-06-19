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
    
    public class UserController : ControllerBase
    {   
        
        private string connectionString;
        private readonly IConfiguration _configuration;
        SqlConnection conn = null;
        
        
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = "User ID=sa;password=examlyMssql@123; server=localhost;Database=CustomizedNameBoard_GiftShop;trusted_connection=false;Persist Security Info=False;Encrypt=False";
            conn = new SqlConnection(connectionString);

        }

        [HttpPost]
        [Route("user/addUser")]
        public string addUser(UserModel user)
        {
            

            try
            {
                SqlCommand cmd = new SqlCommand();
                cmd.CommandText = "UserModel_AddUser";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = conn;
                cmd.Parameters.AddWithValue("@email", user.email);
                cmd.Parameters.AddWithValue("@password", user.password);
                cmd.Parameters.AddWithValue("@username", user.username);
                cmd.Parameters.AddWithValue("@mobileNumber", user.mobileNumber);
                cmd.Parameters.AddWithValue("@userRole", user.userRole);
                conn.Open();
                int rowaffect = cmd.ExecuteNonQuery();
                conn.Close();

                AuthController auth = new AuthController(_configuration);
                if (user.userRole == "user" || user.userRole == "User")
                {
                    string x = auth.saveUser(user);
                    if (x == "User added")
                    {
                        return "User Added";
                    }
                    else
                    {
                        return "User not added";
                    }
                }
                else
                {
                    string x = auth.saveAdmin(user);
                    if (x == "Admin added")
                    {
                        return "Added";
                    }
                    else
                    {
                        return "Admin not added";
                    }
                }
            }
            catch (Exception ex)
            {
                return "user exists";
            }
        }
        [HttpDelete]
        [Route("user/delete/{UserID}")]
        public string deleteUser(string UserID)
        {
            try
            {

                SqlCommand cmd = new SqlCommand();
                cmd.CommandText = "UserModel_DeleteById";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = conn;
                cmd.Parameters.AddWithValue("@UserID", UserID);
                conn.Open();
                int rowaffect = cmd.ExecuteNonQuery();
                conn.Close();
                if (rowaffect > 0)
                {
                    return "User deleted";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

        }
        [HttpPut]
        [Route("user/update/{UserID}")]
        public string editUser(string UserID, UserModel user)
        {
            try
            {
                SqlCommand cmd = new SqlCommand();
                cmd.CommandText = "UserModel_Update";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = conn;
                cmd.Parameters.AddWithValue("@UserID", UserID);
                cmd.Parameters.AddWithValue("@email", user.email);
                cmd.Parameters.AddWithValue("@password", user.password);
                cmd.Parameters.AddWithValue("@username", user.username);
                cmd.Parameters.AddWithValue("@mobileNumber", user.mobileNumber);
                cmd.Parameters.AddWithValue("@userRole", user.userRole);
                conn.Open();
                int rowaffect = cmd.ExecuteNonQuery();
                conn.Close();
                if (rowaffect > 0)
                {
                    return "User updated";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
        [HttpGet]
        [Route("user/getList")]

        public string getUser()
        {
            try
            {
                List<UserModel> umlist = new List<UserModel>();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandText = "UserModel_GetByList";
                cmd.Connection = conn;
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter sda = null;
                sda = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                sda.Fill(dt);
                foreach (DataRow dr in dt.Rows)
                {
                    UserModel um = new UserModel();
                    um.email = dr["email"].ToString();
                    um.password = dr["password"].ToString();
                    um.username = dr["username"].ToString();
                    um.mobileNumber = dr["mobileNumber"].ToString();
                    um.userRole = dr["userRole"].ToString();
                    umlist.Add(um);
                }
                return ("retrive all the user details");
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
       
    }
}