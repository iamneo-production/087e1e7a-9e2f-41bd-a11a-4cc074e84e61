import React ,{useState,useEffect} from "react";
import NavigationMenu from "./NavMenu";
import { Table } from "react-bootstrap";
import './Admingifts.css';
import Addgift from "./Addgift";
import axios from "axios";
import Editgift from "./EditGifts"
import Deletegift from "./Deletegift";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminGifts=()=>{
    const [gifts,setGifts] = useState([]);
    const [effect,setEffect] = useState('');
   
    
    useEffect(() => {
      //Get themes Api
    axios.get('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/gift/admin/getGift')
      .then(response => {
      setGifts(response.data);
     
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
    <div className="gifts">
            <div className="giftstable">
            <Table  hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Gift Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                      {
                      gifts.map((gift,index) => 
                      
                      <tr key={gift.giftId} className="gift">
                      <td><img src={gift.giftImageUrl} width={100} height={100} alt="gift img" /></td>
                      <td>{gift.giftName}</td>
                      <td>{gift.giftPrice}</td>
                      <td>{gift.giftQuantity}</td>
                      <td>
                        
                      <span id={"editGift"+(index+1)}><Editgift giftid={gift.giftId} onGiftEdited={() => setEffect(Date.now())}/></span>
                      <span id={"deleteGift"+(index+1)}><Deletegift giftid={gift.giftId} onGiftDeleted={() => setEffect(Date.now())}/></span>
                        
                        </td>
                      </tr>
                      )}
                </tbody>                        
            </Table>
    </div>

    <div className="addgifts">
      
      <Addgift onGiftAdded={() => setEffect(Date.now())}/>
      </div>
      
</div>
        </div>
    )
}
export default AdminGifts;