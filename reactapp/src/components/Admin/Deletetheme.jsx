import React from "react";
import { Button } from "react-bootstrap";
import {  AiFillDelete} from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Deletetheme = (props) =>{
    
    const handleDelete=(id)=>{
        //Delete Theme Api
        axios.delete('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/theme/admin/deleteTheme/'+id)
          .then(response => {
            if(response.data==="Theme deleted"){
            props.onThemeDeleted();
            toast.success("Theme Deleted");
            }
          })
          .catch(error => toast.warning("Theme Not Deleted"));
        }

    return (
        <>
        <Button variant="" onClick={()=>handleDelete(props.themeid)} ><AiFillDelete/></Button>
        </>
    )
}
export default Deletetheme;