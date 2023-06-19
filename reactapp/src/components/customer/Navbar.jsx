import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Navbar.css';

export const NavigationMenu = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Navbar.Brand>
        <Nav.Link href="/homepage" id="">Name Boards</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Item>
            <Nav.Link href="/homepage" id="giftHomeButton">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/myorders" id="myOrderButton">My Orders</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item className="navLogout">
            <Nav.Link href="/" id="logout" onClick={() => localStorage.clear()}>Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;
