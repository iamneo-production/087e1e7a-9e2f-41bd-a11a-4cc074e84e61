import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addtheme = (props) =>{
    const [ThemeName,setThemename]=useState('');
    const [ThemePrice,setThemePrice]=useState('');
    const [Themedescription,setThemeDescription]=useState('');

    const handleThemeName = (e) =>{
      setThemename(e.target.value);
      }
      const handleThemePrice = (e) =>{
          setThemePrice(e.target.value);
      }
      const handleThemeDescription = (e) =>{
          setThemeDescription(e.target.value);
      }

      //Add Theme
    const handleAddTheme = (e) =>{
        e.preventDefault();
          const themeData = {
              themename : ThemeName,
              themeprice : ThemePrice,
              themedetails : Themedescription
          }
        
            //Add theme Api
            if(themeData.themename!=="" && themeData.themeDetails!=="" && themeData.themeprice!==""){
          const url = "https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/theme/admin/addTheme";
          axios.post(url,themeData).then((result)=>{
            console.log(result.data)
            if(result.data==="Theme Added"){
            props.onThemeAdded();
            toast.success("Theme Added")
            }
          }).catch((error)=>{
            toast.warning("Theme Not Added");
          })
        }
      }
    
    return(
        <Form onSubmit={handleAddTheme}>   
    <Form.Text className="text-muted">
          <h1>Add Theme</h1>
        </Form.Text>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the theme name" id="enterThemeName" onChange={handleThemeName}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Enter the theme price" id="enterThemePrice"  onChange={handleThemePrice}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter the theme description" id="enterThemeDescription"  onChange={handleThemeDescription} />
      </Form.Group>     
      <Button variant="primary" type="submit" id="add">
        Add Theme
      </Button>
    </Form>
    )
}
export default Addtheme;