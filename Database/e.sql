

SELECT 
    orderID, 
    orderName, 
    orderDescription, 
    ThemeModel, 
    GiftModel.giftName, GiftModel.giftPrice
    orderDate, 
    orderPrice, 
    orderAddress, 
    orderPhone, 
    orderEmail, 
    orderQuantity
FROM 
    OrdersCart
JOIN 
    GiftModel ON OrdersCart.GiftId = GiftModel.giftId
WHERE 
    orderEmail = @userEmail;
