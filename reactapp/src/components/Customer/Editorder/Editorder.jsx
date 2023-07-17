import React, {useState,useEffect} from "react";
import { Modal,Button,Form,DropdownButton,Dropdown } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const EditOrder=(props)=>{ 
    const order = props.orderData;
    
  const [themes,setThemes] = useState([]);
  useEffect(() => {
  //Get themes Api
  axios.get('https://8080-dcfcfccddeabadfbbdfdacbcefeddcbcbaffb.project.examly.io/admin/getTheme')
    .then(response => {
      setThemes(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const[Name,setName]=useState('');
const[orderDate,setDate]=useState('');
const[Adress,setAddress]=useState('');
const[PhoneNo,setPhone]=useState('');
const[Descripation,setDescripation]=useState('');
const giftModel= (order.GiftId);
const [Quantity,setOrderQuantity]=useState('');
const [themePrice,SetThemePrice]=useState(0);
const Price= (order.giftPrice + themePrice)*Quantity;
const [themeModel,setThemeModel]=useState([])
const [selectedThemes, setSelectedThemes] = useState([]);
const handleSubmit=(e)=>{
    e.preventDefault();
          const Orderdata={
          orderName:Name,
          orderDate:orderDate,
          orderAddress:Adress,
          orderPhone:PhoneNo,
          orderEmail:localStorage.getItem("email"), 
          orderDescription:Descripation,
          orderPrice:Price,
          giftModel:giftModel,
          themeModel:themeModel,
          orderQuantity:Quantity
      }
      console.log(order)
      axios.put('https://8080-dcfcfccddeabadfbbdfdacbcefeddcbcbaffb.project.examly.io/user/editOrder/'+order.orderID,Orderdata).then((result)=>{
        console.log(result.data);
        if(result.data === "order updated"){
          props.onOrderEdited();
          handleClose();
        }
      }).catch((error)=>{
        toast.warning(error);
      })
     
  }
  const handleThemeSelect = (event) => {
    const { value, checked } = event.target;
    const selectedTheme = themes.find((theme) => theme.themeName === value);
    let currentPrice = themePrice;
    if (checked) {
      setThemeModel((prevThemeModel) => [...prevThemeModel, selectedTheme]);
      SetThemePrice(currentPrice+selectedTheme.themePrice)
      setSelectedThemes((prevSelectedThemes) => [...prevSelectedThemes, value]);
    } else {
      setSelectedThemes((prevSelectedThemes) =>
        prevSelectedThemes.filter((theme) => theme !== value));
      setThemeModel((prevThemeModel) =>
        prevThemeModel.filter((theme) => theme.themeName !== selectedTheme.themeName));
        SetThemePrice(currentPrice-selectedTheme.themePrice)
    }
  };
  return (
    <>
      <Button variant="" onClick={handleShow}>
      <FaRegEdit />
      </Button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
            <h1>Edit Order</h1>
        </Modal.Header>
        <Modal.Body>
        <Form className='placeorderform'   >
        
          <div>
        <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter Name" id="enterName" onChange={(e)=>setName(e.target.value)} required />
        
       </Form.Group>
      <Form.Group className="mb-3">
      <Form.Control type="date" placeholder="Enter Date"  id="enterDate" onChange={(e)=>setDate(e.target.value)} required/>
      
      </Form.Group>  
      <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Enter Address" id="enterAddress" onChange={(e)=>setAddress(e.target.value)} required/>
      
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Enter Phone Number" id="enterPhoneNo" onChange={(e)=>setPhone(e.target.value)} required/>
     
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="email" value={localStorage.getItem("email")}  id="enterEmailId"/>
      
      </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" >
      <Form.Control type="text" defaultValue={order.giftPrice} id="orderPrice"/>
     
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="text" defaultValue={order.giftName} id="giftModel"/>
     
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="Enter Description" id="enterDescripation" onChange={(e)=>setDescripation(e.target.value)}/>
     
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="number" placeholder="Enter Quantiy" id="quantity" onChange={(e)=>{setOrderQuantity(e.target.value)}} />
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
      </div>      
      <Button id='updateOrder' onClick={handleSubmit} >Update Order</Button>
      </Form>
        </Modal.Body>
      </Modal>

      </>
      )
}

export default EditOrder;