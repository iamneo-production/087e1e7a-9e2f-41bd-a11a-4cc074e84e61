create procedure LoginModel_IsUserPresent(
    @email varchar(70),
    @password varchar(20)
)
as
begin
    select count(*) from LoginModel
    where email = @email and password = @password COLLATE SQL_Latin1_General_CP1_CS_AS;
end;
GO

create procedure LoginModel_SaveUser(
    @email varchar(70),
    @password varchar(25)
)
as
begin
    insert into LoginModel (email, password)
    values (@email, @password);
end;
GO

create procedure AdminModel_IsAdminPresent(
    @email varchar(70),
    @password varchar(20)
)
as
begin
    select count(*) from AdminModel
    where email = @email and password = @password COLLATE SQL_Latin1_General_CP1_CS_AS;
end;
GO

create procedure AdminModel_SaveAdmin(
    @email varchar(70),
    @password varchar(20),
    @mobileNumber varchar(14),
    @userRole varchar(10)
)
as
begin
    insert into AdminModel (email, password, mobileNumber, userRole)
    values (@email, @password, @mobileNumber, @userRole);
end;
GO

create procedure UserModel_AddUser(
    @email varchar(70),
    @password varchar(20),
    @username varchar(120),
    @mobileNumber varchar(15),
    @userRole varchar(10)
)
as
begin
    insert into UserModel (email, password, username, mobileNumber, userRole)
    values (@email, @password, @username, @mobileNumber, @userRole);
end;
GO

create procedure ThemeModel_Insert(
    @themeName varchar(50),
    @themeDetails varchar(225),
    @themePrice int
)
as
begin
    insert into ThemeModel (themeName, themeDetails, themePrice)
    values (@themeName, @themeDetails, @themePrice);
end;
GO

create procedure ThemeModel_GetByList
as
begin
    select themeId, themeName, themeDetails, themePrice
    from ThemeModel;
end;
GO

create procedure ThemeModel_DeleteById(
    @themeId int
)
as
begin
    delete from ThemeModel
    where themeId = @themeId;
end;
GO

create procedure ThemeModel_Update(
    @themeId int,
    @themeName varchar(50),
    @themeDetails varchar(225),
    @themePrice int
)
as
begin
    update ThemeModel
    set themeName = @themeName, themeDetails = @themeDetails, themePrice = @themePrice
    where themeId = @themeId;
end;
GO

create procedure GiftModel_Insert(
    @giftName varchar(50),
    @giftPrice int,
    @GiftImageUrl varchar(225),
    @giftQuantity int,
    @giftDetails varchar(225)
)
as
begin
    insert into GiftModel (giftName, giftPrice, GiftImageUrl, giftQuantity, giftDetails)
    values (@giftName, @giftPrice, @GiftImageUrl, @giftQuantity, @giftDetails);
end;
GO

create procedure GiftModel_GetAll
as
begin
    select giftId, giftName, giftPrice, GiftImageUrl, giftQuantity, giftDetails
    from GiftModel;
end;
GO

create procedure GiftModel_DeleteById(
    @giftId int
)
as
begin
    delete from GiftModel
    where giftId = @giftId;
end;
GO

create procedure GiftModel_UpdateById(
    @giftId int,
    @giftName varchar(50),
    @giftPrice int,
    @GiftImageUrl varchar(225),
    @giftQuantity int,
    @giftDetails varchar(225)
)
as
begin
    update GiftModel
    set giftName = @giftName, giftPrice = @giftPrice, GiftImageUrl = @GiftImageUrl, giftQuantity = @giftQuantity, giftDetails = @giftDetails
    where giftId = @giftId;
end;
GO

create procedure getOrdersCart
@userEmail varchar(100)
as
begin
    SELECT OrdersCart.orderID, GiftModel.giftName, GiftModel.giftPrice, OrdersCart.orderQuantity, OrdersCart.orderPrice
    FROM OrdersCart
    JOIN GiftModel ON OrdersCart.GiftId = GiftModel.giftId
    WHERE OrdersCart.orderEmail = @userEmail;
end;
go

create procedure addOrdersCart
@orderName VARCHAR(50),
@orderDescription VARCHAR(200),
@themeModel xml,
@GiftId int,
@orderDate DATE,
@orderPrice INT,
@orderAddress VARCHAR(200),
@orderPhone VARCHAR(20),
@orderEmail VARCHAR(50),
@orderQuantity Varchar(30)
as
begin
    INSERT INTO OrdersCart (
        orderName,
        orderDescription,
        ThemeModel,
        GiftId,
        orderDate,
        orderPrice,
        orderAddress,
        orderPhone,
        orderEmail,
        orderQuantity
    )
    VALUES (
        @orderName,
        @orderDescription,
        @themeModel,
        @GiftId,
        @orderDate,
        @orderPrice,
        @orderAddress,
        @orderPhone,
        @orderEmail,
        @orderQuantity
    );
end;
go

create procedure addOrders
@userEmail varchar(100)
as
begin
    INSERT INTO Orders (
        orderName,
        orderDescription,
        ThemeModel,
        GiftId,
        orderDate,
        orderPrice,
        orderAddress,
        orderPhone,
        orderEmail,
        orderQuantity
    )
    SELECT
        orderName,
        orderDescription,
        themeModel,
        GiftId,
        orderDate,
        orderPrice,
        orderAddress,
        orderPhone,
        orderEmail,
        orderQuantity
    FROM OrdersCart
    WHERE orderEmail = @userEmail;
end;
go

create procedure DeletefromOrdersCart
@userEmail varchar(100)
as
begin
    DELETE FROM OrdersCart WHERE orderEmail = @userEmail;
end;
go

create procedure DeleteOrdersCartbyId
@orderID int
as
begin
    DELETE FROM OrdersCart WHERE orderID = @orderID;
end;
go

create procedure UpdateOrdersCart
@orderID int,
@orderName VARCHAR(50),
@orderDescription VARCHAR(200),
@ThemeModel xml,
@orderDate DATE,
@orderAddress VARCHAR(200),
@orderPhone VARCHAR(20),
@orderQuantity varchar(30)
as
begin
    UPDATE OrdersCart
    SET
        orderName = @orderName,
        orderDescription = @orderDescription,
        ThemeModel = @ThemeModel,
        orderDate = @orderDate,
        orderAddress = @orderAddress,
        orderPhone = @orderPhone,
        orderQuantity = @orderQuantity
    WHERE
        orderID = @orderID;
end;
go






create procedure ViewOrders
as
begin
    SELECT ot.orderid, ut.userName, gt.giftName, gt.giftPrice,ot.orderAddress
    , ot.orderQuantity
    FROM Orders ot
    INNER JOIN UserModel ut ON ot.orderemail = ut.email
    INNER JOIN GiftModel gt ON ot.GiftId = gt.giftId;
end;
go



create procedure UserViewOrders @email varchar(50)
as
begin
    SELECT ot.orderid, gt.giftName, gt.giftPrice, ot.orderQuantity
    FROM Orders ot
    INNER JOIN GiftModel gt ON ot.GiftId = gt.giftId
    where orderemail = @email
end;
go

create procedure InsertReview(@orderId int,@name varchar(20),@comments varchar(150))
As
Begin
insert into ReviewModel(orderId,name,comments) values(@orderId,@name,@comments)
End;
go

create procedure GetReview
As
Begin
select orderId,name,comments from ReviewModel
End;
go


create procedure LoginModel_UpdatePassword @email varchar(50),@password varchar(20)
as
update LoginModel set password = @password
where email = @email
go

create procedure UserModel_updatePassword @email varchar(50),@password varchar(20)
as
update UserModel set password = @password
where email = @email
go

create procedure UserModel_UpdateMobileNumber @email varchar(50),@mobileNumber varchar(20)
as
update UserModel set mobileNumber = @mobileNumber
where email = @email
go

create procedure UserModel_UpdateUsername @email varchar(50),@username varchar(20)
as
update UserModel set username = @username
where email = @email
go

create procedure UserModel_GetUserbyEmail  @email varchar(50)
as
select userName ,mobileNumber from UserModel
where email = @email
go

create procedure UserModel_GetByList
As
Begin
Select * From UserModel
End;
go

create procedure UserModel_DeleteById(@UserID varchar(50))
As
Begin
Delete from UserModel Where email=@UserID
End;
go

create procedure UserModel_Update(@UserID varchar(50),@email varchar(70),@password varchar(20),@username varchar(120),@mobileNumber varchar(15),@userRole varchar(10))
As
begin
Update UserModel set email=@email,password=@password,username=@username,mobileNumber=@mobileNumber,userRole=@userRole
where email=@UserID
End;
go

create procedure UserGiftModel_Insert(@giftName varchar(50),@giftPrice int,@GiftImageUrl varchar(225),
@giftQuantity varchar(10),@giftDetails varchar(225))
As
Begin
Insert into UserGiftModel(giftName,giftPrice,GiftImageUrl,giftQuantity,giftDetails)
Values(@giftName,@giftPrice,@GiftImageUrl,@giftQuantity,@giftDetails)
End;
go

create procedure UserThemeModel_Insert1(@themeName varchar(50),@themeDetails varchar(225),@themePrice int)
As
Begin
Insert into UserThemeModel(themeName,themePrice,themeDetails)values(@themeName,@themePrice,@themeDetails)
End;
go

create procedure DeleteOrders @orderID int
as
begin
delete from Orders where orderID=@orderID
end;
go