create table LoginModel(email varchar(70) primary key ,password varchar(20));

create table AdminModel(email varchar(70) primary key,password varchar(20),mobileNumber varchar(14),userRole varchar(10));

CREATE TABLE UserModel (
    id INT IDENTITY(1, 1) ,
    email VARCHAR(70)  PRIMARY KEY,
    password VARCHAR(20),
    username VARCHAR(120),
    mobileNumber VARCHAR(15),
    userRole VARCHAR(10),
);

create table ThemeModel(themeId int primary key identity(1,1),themeName varchar(50),themeDetails varchar(225),themePrice int);

create table GiftModel(giftId int IDENTITY(1,1)PRIMARY KEY,
giftName varchar(50),
giftPrice int,
GiftImageUrl varchar(700),
giftQuantity int,
giftDetails varchar(225)
);

CREATE TABLE Orders
(
    orderID INT IDENTITY(1,1) PRIMARY KEY,
    orderName VARCHAR(255),
	orderDescription VARCHAR(255),
	ThemeModel XML,
	GiftId int,
	orderDate DATE,
	orderPrice INT,
	orderAddress VARCHAR(100),
	orderPhone Varchar(10),
	orderEmail Varchar(30),
	orderQuantity varchar(30)
   
);
 

CREATE TABLE OrdersCart
(
     orderID INT IDENTITY(1,1) PRIMARY KEY,
    orderName VARCHAR(255),
	orderDescription VARCHAR(255),
	ThemeModel XML,
	GiftId int,
	orderDate DATE,
	orderPrice INT,
	orderAddress VARCHAR(100),
	orderPhone Varchar(10),
	orderEmail Varchar(30),
	orderQuantity Varchar(30)
   
);

create table ReviewModel(orderId int,name varchar(20),comments varchar(150))

create table UserGiftModel
(giftId int IDENTITY(1,1) PRIMARY KEY,
giftName varchar(50),
giftPrice int,
GiftImageUrl varchar(700),
giftQuantity varchar(10),
giftDetails varchar(225)
)

create table UserThemeModel(themeId int IDENTITY(1,1) PRIMARY KEY,themeName varchar(50),themePrice int,themeDetails varchar(225))
