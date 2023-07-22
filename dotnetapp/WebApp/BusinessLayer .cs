using System;
using System.Collections.Generic;
using WebApp.Models;
using Microsoft.AspNetCore.Mvc;


namespace WebApp
{
    public class BusinessLayer
    {
        
       
  private readonly DataAccessLayer _dataAccessLayer = new DataAccessLayer();

        // AuthController
        public bool isUserPresent(LoginModel lm)
        {
            return _dataAccessLayer.isUserPresent(lm);
        }

        public bool isAdminPresent(LoginModel lm)
        {
            return _dataAccessLayer.isAdminPresent(lm);
        }

        public string saveUser(UserModel user)
        {
            return _dataAccessLayer.saveUser(user);
        }

        public string saveAdmin(UserModel user)
        {
            return _dataAccessLayer.saveAdmin(user);
        }

        // UserController
        public string addUser(UserModel user)
        {
            return _dataAccessLayer.addUser(user);
        }

        public string deleteUser(string userID)
        {
            return _dataAccessLayer.deleteUser(userID);
        }

        public string editUser(string userID, UserModel user)
        {
            return _dataAccessLayer.editUser(userID, user);
        }

<<<<<<< HEAD
        public string getUser()
=======
        public List<UserModel> getUser()
>>>>>>> ed86e1a80104bc9a714eaed6fb2bdbfc379c90a4
        {
            return _dataAccessLayer.getUser();
        }

<<<<<<< HEAD
=======
        public UserModel getUserByEmail(string email){
            return _dataAccessLayer.getUserByEmail(email);
        }

        public string UpdatePassword(LoginModel login){
            return _dataAccessLayer.UpdatePassword(login);
        }

        public string updateMobileNumber(UserModel user){
            return _dataAccessLayer.updateMobileNumber(user);
        }

        public string updateusername(UserModel user){
            return _dataAccessLayer.updateusername(user);
        }

>>>>>>> ed86e1a80104bc9a714eaed6fb2bdbfc379c90a4
        // ThemeController
        public List<ThemeModel> GetAllThemes()
        {
            return _dataAccessLayer.GetAllThemes();
        }

        public string addTheme(ThemeModel data)
        {
            return _dataAccessLayer.addTheme(data);
        }

        public string DeleteTheme(int themeId)
        {
            return _dataAccessLayer.DeleteTheme(themeId);
        }

        public string EditTheme(int themeId, ThemeModel data)
        {
            return _dataAccessLayer.EditTheme(themeId, data);
        }

        // User side theme selection and insertion
        public List<ThemeModel> GetThemes()
        {
            return _dataAccessLayer.GetThemes();
        }

        public string selectTheme(ThemeModel data)
        {
            return _dataAccessLayer.selectTheme(data);
        }

        // GiftController
        public List<GiftModel> getAllGifts()
        {
            return _dataAccessLayer.getAllGifts();
        }

        public string addGift(GiftModel data)
        {
            return _dataAccessLayer.addGift(data);
        }

        public string editGift(int giftId, GiftModel data)
        {
            return _dataAccessLayer.editGift(giftId, data);
        }

        public string DeleteGift(int giftId)
        {
            return _dataAccessLayer.DeleteGift(giftId);
        }

        public string selectGift(GiftModel data)
        {
            return _dataAccessLayer.selectGift(data);
        }

        //Order Controller
         public string addOrdersCart(OrderModel order)
        {
            return _dataAccessLayer.addOrdersCart(order);
        }

        
        public string addOrders(string userEmail)
        {
           
              return  _dataAccessLayer.addOrders(userEmail);
        }
    


        public IActionResult viewPlacedOrders(string userEmail)
        {

           return _dataAccessLayer.viewPlacedOrders(userEmail);
        }
       
       
       
        public string editOrder(int orderID, OrderModel or)
        {
          return _dataAccessLayer.editOrder(orderID,or);
           
        }
       
        public string deleteOrder(int orderID)
        {
           return _dataAccessLayer.deleteOrder(orderID);
        }
        
        public IActionResult viewOrder()
        {

           return _dataAccessLayer.viewOrder();
        }

<<<<<<< HEAD
        public string AdminDeleteOrder(int orderID)
        {
            return _dataAccessLayer.AdminDeleteOrder(orderID);
        }

        //Review Controller

        public List<ReviewModel> Get()
        {
            return _dataAccessLayer.Get();
        }

        public string Postreview(ReviewModel r)
        {
            return _dataAccessLayer.Postreview(r);
=======
         public IActionResult MyOrders(string email)
        {

           return _dataAccessLayer.MyOrders(email);
        }

        public string AdminDeleteOrder( int orderID)
        {
            return _dataAccessLayer.AdminDeleteOrder(orderID);
        }
        //Review Controller

         public List<ReviewModel> GetReviews()
        {
	     return _dataAccessLayer.GetReviews();
        }
       
        public string Postreview(ReviewModel review)
        {
            return _dataAccessLayer.Postreview(review);
>>>>>>> ed86e1a80104bc9a714eaed6fb2bdbfc379c90a4
        }
    }
}
