import React, { useState ,useEffect} from "react";
import NavigationMenu from "./NavMenu";

import { Card } from "react-bootstrap";

import axios from "axios";
import Editthemes from "./Editthemes";
import './Adminthemes.css'
import Addtheme from "./Addtheme";
import Deletetheme from "./Deletetheme";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminThemes(){

    const [themes,setThemes] = useState([]);
    const [effect,setEffect] = useState('');
    useEffect(() => {
    //Get themes Api
    axios.get('https://8080-ecdbffcdccababadfbbdfdacbcfcecaabcfba.project.examly.io/theme/admin/getTheme')
      .then(response => {
        setThemes(response.data);
      
      })
      .catch(error => {
        console.log(error);
      });
  }, [effect]);

    return(
        <div>
            <div>
                <NavigationMenu />
            </div>
           <ToastContainer/>
      <div className="themes">
            <div className="themeslist">
                {
                 themes.map((themes,index)=>
                 <Card style={{ width: '20rem' }} key={themes.themeId} id={"themeGrid"+(index+1)} >
                 <Card.Body>
                 <li>Theme Name : {themes.themeName}</li>
                 <li>Theme Price : {themes.themePrice}</li>
                 <li>Theme Description :{themes.themeDetails}</li>
                 <div className="editdelete">
                 <span   id={"editTheme"+(index+1)}><Editthemes themeid={themes.themeId} onThemeEdited={() => setEffect(Date.now())} /></span>
                 <span   id={"deleteTheme"+(index+1)}> <Deletetheme themeid={themes.themeId} onThemeDeleted={() => setEffect(Date.now())}/> </span>
                 </div>
                 </Card.Body>
                 </Card>
                )}
            </div>
        <div className="addtheme"><Addtheme onThemeAdded={() => setEffect(Date.now())}/></div>
    </div>
        </div>
    )
}
export default AdminThemes;