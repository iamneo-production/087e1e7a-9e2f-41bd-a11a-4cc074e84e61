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

        public string getUser()
        {
            return _dataAccessLayer.getUser();
        }

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
        }
    }
}
