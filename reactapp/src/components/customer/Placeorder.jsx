import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationMenu from './Navbar';
import {Button,Form,DropdownButton,Dropdown} from 'react-bootstrap';
import "./Placeorder.css"
import { toast } from 'react-toastify';


function Placeorder() {
  const location = useLocation();
  const gift = location.state;
  //console.log(gift)
  
  
  const [themes,setThemes] = useState([]);
  useEffect(() => {
  //Get themes Api
  axios.get('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/theme/admin/getTheme')
    .then(response => {
      setThemes(response.data);
     // console.log(themes);
    })
    .catch(error => {
      console.log(error);
    });
}, []);


const[Name,setName]=useState('');
const[Date,setDate]=useState('');
const[Adress,setAddress]=useState('');
const[PhoneNo,setPhone]=useState('');
const[EmailId,setEmail]=useState(localStorage.getItem("email"));
const[Descripation,setDescripation]=useState('');
const[Price,setPrice]=useState(gift.giftPrice);
const[giftModel,setgiftModel]=useState(gift);
const [themeModel,setThemeModel]=useState([])
const [selectedThemes, setSelectedThemes] = useState([]);
const [Quantity,setOrderQuantity]=useState('');


const handleThemeSelect = (event) => {
  const { value, checked } = event.target;
  const selectedTheme = themes.find((theme) => theme.themeName === value);
  if (checked) {
    setThemeModel((prevThemeModel) => [...prevThemeModel, selectedTheme]);
    
    setSelectedThemes((prevSelectedThemes) => [...prevSelectedThemes, value]);
  } else {
    setSelectedThemes((prevSelectedThemes) =>
      prevSelectedThemes.filter((theme) => theme !== value)
    );
    setThemeModel((prevThemeModel) =>
      prevThemeModel.filter((theme) => theme.themeName !== selectedTheme.themeName)
    );
    
  }
};



const navigate=useNavigate();

const handleSubmit=(e)=>{
 
  e.preventDefault();
        const Orderdata={
        orderName:Name,
        orderDate:Date,
        orderAddress:Adress,
        orderPhone:PhoneNo,
        orderEmail:localStorage.getItem("email"),
        orderDescription:Descripation,
        orderPrice:Price,
        giftModel:giftModel,
        ThemeModel:themeModel,
        orderQuantity:Quantity,
    }
    console.log(Orderdata)
    axios.post('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/order/user/addOrdersCart',Orderdata).then((result)=>{
      console.log(result.data);
      if(result.data === "Order added"){
        navigate('/Myorders');
        toast.success("Order Placed")
      }
    }).catch((error)=>{
      console.log("All fields are required");
    })
   
  
}

  return (
    <div>
        <div>
            <NavigationMenu/>
           
        </div>
        <Form className='placeorderform'  >
          <div>
        <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter your Name" id="enterName" onChange={(e)=>setName(e.target.value)}  required/>
       </Form.Group>
      <Form.Group className="mb-3">
      <Form.Control type="date" placeholder="Enter the order date" id="enterDate" onChange={(e)=>setDate(e.target.value)} required/>
      
      </Form.Group>  
      <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Enter Your Address" id="enterAddress" onChange={(e)=>setAddress(e.target.value)} required/>
      
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Enter Your Phone Number" id="enterPhoneNo" onChange={(e)=>setPhone(e.target.value)} required/>
      
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="email" value={EmailId} placeholder="Enter Your Email Id"  id="enterEmailId"/>
      </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" >
      <Form.Control type="text" value={Price} id="orderPrice"/>
      
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="text" value={giftModel.giftName} id="giftModel"/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="order description"id="enterDescripation" onChange={(e)=>setDescripation(e.target.value)} required/>
     
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="number" placeholder="Enter Quantity" id="quantity" onChange={(e)=>{setOrderQuantity(e.target.value)}} required/>
      </Form.Group>

  <Dropdown className="d-inline" align="end">
  <DropdownButton variant='outline-secondary' id='selectThemeModel' title="Select the Theme">
  {
    themes.map((theme) => (
    <Form.Check
      key={theme.themeId}
      type="checkbox"
      id={theme.themeId}
      label={theme.themeName +" - "+ theme.themePrice} 
      value={theme.themeName}
       checked={selectedThemes.includes(theme.themeName)}
      onChange={handleThemeSelect}
    />
  ))}
</DropdownButton>
</Dropdown>
    <Button id='placeOrder' onClick={handleSubmit}>Place Order</Button>
      </div>   
      </Form>
    </div>
  );
}

export default Placeorder;
