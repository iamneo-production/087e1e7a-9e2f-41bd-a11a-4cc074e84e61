import React ,{useEffect,useState} from "react";
import NavigationMenu from "./Navbar";
import {  Card,Dropdown } from "react-bootstrap";
import './Homepage.css';
import axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";


const Homepage=()=>{
    const navigate = useNavigate();
    const handleGift = (gift) => {
      navigate('/placeorder',{state:gift});
    }
    
    const [gifts,setGifts] = useState([]);
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
      // Get Gifts API
      axios.get('https://8080-afafecaabdbcabadfbbdfdacbcfcecaabcfba.project.examly.io/gift/admin/getgift')
        .then(response => {
          const fetchedGifts = response.data;
          let sortedGifts = [...fetchedGifts];
          if (sortBy === "name") {
            sortedGifts.sort((a, b) => a.giftName.localeCompare(b.giftName));
          } else if (sortBy === "lowtohigh") {
            sortedGifts.sort((a, b) => a.giftPrice - b.giftPrice);
          } else if (sortBy === "hightolow") {
            sortedGifts.sort((a, b) => b.giftPrice - a.giftPrice);
          }
          
          setGifts(sortedGifts);
        })
        .catch(error => {
          console.log(error);
        });
    }, [sortBy]);
    
    return(
        <div>
            <div><NavigationMenu /></div>
      
            
            <div id="userHomeBody">
            <h1 id="welcome">Welcome</h1>
            <div className="dropdown-container">
            <Dropdown >
            <Dropdown.Toggle variant="" id="">
              Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSortBy("name")}>Sort by Name</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("lowtohigh")}>low to high </Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("hightolow")}>high to low</Dropdown.Item>
              <Dropdown.Item onClick={() => setSortBy("")}>Clear </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
              <div>
                {gifts.map((gift,index)=>
                <Card style={{ width: '18rem' }}  key={gift.giftId} id={"grid"+(index+1)} >
                <Card.Img variant="top" onClick={()=>handleGift(gift)} src={gift.giftImageUrl} width={180} height={180} />
                <Card.Body>
                    <Card.Title>Name : {gift.giftName}</Card.Title>
                    <Card.Text>Price : ₹{gift.giftPrice}</Card.Text>
                </Card.Body>
                </Card>
              
            )}  </div>
            </div>
        </div>
    )
}

export default Homepage;