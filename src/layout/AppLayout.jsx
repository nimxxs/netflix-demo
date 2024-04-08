import React from 'react';
import {Nav, Navbar, Container, Form, Button} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
    <Navbar expand="lg" className="nav-background">
      <Container fluid>
        <Navbar.Brand href="#"><img className="netflix-logo" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bcb0e800-77b3-40d9-9ccb-4195483fb726-profile_image-300x300.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Nav.Link href="/" className='nav-font-color nav-link'>Home</Nav.Link>
            <Nav.Link href="/Movies" className='nav-font-color nav-link'>Movies</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* router 안에 있는 자손들을 들고 오게 하는 컴포넌트*/}
    <Outlet />
    </div>
  )
}

export default AppLayout