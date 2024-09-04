import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import NetFlixLogo from "../images/netflixText.png";
import { Link } from "react-router-dom";

export default function AppLayout() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div>
      <Navbar expand="lg" className="px-3 bg-black" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="d-inline-block align-top"
              src={NetFlixLogo}
              alt="Navbar Logo"
              style={{
                width: "100px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", display: "flex", gap: "20px" }}
              navbarScroll
            >
              <Nav
                as={Link}
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                }}
              >
                Home
              </Nav>
              <Nav
                as={Link}
                to="/movies"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                }}
              >
                Movies
              </Nav>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => searchByKeyword(e)}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
