import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url을 바꿔줌 -> keyword가 세팅된 채로 새로고침이 되기 때문에 url자체를 들고오는 게 좋음
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div>
      <Navbar expand="lg" className="nav-background">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="netflix-logo"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/bcb0e800-77b3-40d9-9ccb-4195483fb726-profile_image-300x300.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="nav-font-color nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/Movies" className="nav-font-color nav-link">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* router 안에 있는 자손들을 들고 오게 하는 컴포넌트*/}
      <Outlet />
    </div>
  );
};

export default AppLayout;
