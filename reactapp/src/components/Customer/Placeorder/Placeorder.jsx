import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationMenu from '../Navbar/Navbar';
import { Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import './Placeorder.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Placeorder() {
  const location = useLocation();
  const gift = location.state;

  const [Name, setName] = useState('');
  const [orderDate, setDate] = useState('');
  const [Address, setAddress] = useState('');
  const [PhoneNo, setPhone] = useState('');
  const EmailId = localStorage.getItem('email');
  const [Description, setDescription] = useState('');
  const [Quantity, setOrderQuantity] = useState(1); // Default quantity is 1
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [errors, setErrors] = useState({});

  const handleThemeSelect = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedThemes((prevSelectedThemes) => [...prevSelectedThemes, value]);
    } else {
      setSelectedThemes((prevSelectedThemes) =>
        prevSelectedThemes.filter((theme) => theme !== value)
      );
    }
  };

  const [themes, setThemes] = useState([]);
  useEffect(() => {
    // Get themes API
    axios
      .get('https://8080-dafbecdaebfdaaaabadfbbdfdacbcefeddcbcbaffb.project.examly.io/admin/getTheme')
      .then((response) => {
        setThemes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    let hasErrors = false;

    if (!Name) {
      formErrors.Name = 'Name is required';
      hasErrors = true;
    }
    if (!Address) {
      formErrors.Address = 'Address is required';
      hasErrors = true;
    }
    if (!orderDate) {
      formErrors.orderDate = 'Order date is required';
      hasErrors = true;
    }
    if (!Quantity) {
      formErrors.Quantity = 'Quantity is required';
      hasErrors = true;
    }
    if (!PhoneNo) {
      formErrors.PhoneNo = 'Phone number is required';
      hasErrors = true;
    } else if (!/^\d{10}$/.test(PhoneNo)) {
      formErrors.PhoneNo = 'Invalid phone number';
      hasErrors = true;
    }
    if (selectedThemes.length === 0) {
      formErrors.ThemeModel = 'Theme not selected';
      hasErrors = true;
    }

    setErrors(formErrors);

    if (!hasErrors) {
      const totalCost = Quantity * gift.giftPrice;

      const Orderdata = {
        orderName: Name,
        orderDate: orderDate,
        orderAddress: Address,
        orderPhone: PhoneNo,
        orderEmail: EmailId,
        orderDescription: Description,
        orderPrice: totalCost,
        giftModel: gift,
        ThemeModel: themes.filter((theme) => selectedThemes.includes(theme.themeName)),
        orderQuantity: Quantity,
      };

      axios
        .post('https://8080-dafbecdaebfdaaaabadfbbdfdacbcefeddcbcbaffb.project.examly.io/user/addOrdersCart', Orderdata)
        .then((result) => {
          console.log(result.data);
          if (result.data === 'Order added') {
            navigate('/Cart');
            toast.success('Order Placed. Happy shopping!');
          }
        })
        .catch((error) => {
          console.log('All fields are required');
        });
    }
  };

  const today = new Date();
  const minDate = today.toISOString().split('T')[0];

  return (
    <div>
      <NavigationMenu />
      <Form className="placeorderform">
        <div>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              id="enterName"
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.Name && <span className="error-message">{errors.Name}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              placeholder="Enter the order date"
              id="enterDate"
              min={minDate}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            {errors.orderDate && <span className="error-message">{errors.orderDate}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Your Address"
              id="enterAddress"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {errors.Address && <span className="error-message">{errors.Address}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Your Phone Number"
              id="enterPhoneNo"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.PhoneNo && <span className="error-message">{errors.PhoneNo}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" value={EmailId} placeholder="Enter Your Email Id" id="enterEmailId" disabled />
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3">
            <Form.Control type="text" value={gift.giftPrice} id="orderPrice" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" value={gift.giftName} id="giftModel" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Order description"
              id="enterDescription"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter Quantity"
              id="quantity"
              value={Quantity}
              onChange={(e) => setOrderQuantity(e.target.value)}
              required
            />
            {errors.Quantity && <span className="error-message">{errors.Quantity}</span>}
          </Form.Group>

          {themes.length > 0 && (
            <>
              <Dropdown className="d-inline" align="end">
                <DropdownButton variant="outline-secondary" id="selectThemeModel" title="Select the Theme">
                  {themes.map((theme) => (
                    <Form.Check
                      key={theme.themeId}
                      type="checkbox"
                      id={theme.themeId}
                      label={`${theme.themeName} - ${theme.themePrice}`}
                      value={theme.themeName}
                      checked={selectedThemes.includes(theme.themeName)}
                      onChange={handleThemeSelect}
                    />
                  ))}
                </DropdownButton>
              </Dropdown>
              {errors.ThemeModel && <span className="error-message">{errors.ThemeModel}</span>}
            </>
          )}

          <Button id="placeOrder" onClick={handleSubmit}>
            Place Order
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Placeorder;
