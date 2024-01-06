import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    let navigate=useNavigate()
  return <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">InstaBook</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')} >Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/dashboard')}>Dashboard</Nav.Link>
            <Nav.Link onClick={()=>navigate('/create')}>CreatePost</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default TopBar