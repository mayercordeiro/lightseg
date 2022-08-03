import { useEffect, useState } from "react";
// Router
import { NavLink, useLocation } from "react-router-dom";
// Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
// Images
import Logo from "../../assets/images/logo-lightseg.svg";

const Header = () => {
  const [ativaCorHeader, setAtivaCorHeader] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 80) {
        setAtivaCorHeader(true);
      } else {
        setAtivaCorHeader(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
  });

  let location = useLocation();

  return (
    <header>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          collapseOnSelect="true"
          expand={expand}
          className={ativaCorHeader ? "mb-3 scrollOn" : "mb-3 scrollOff"}
          fixed="top"
          id={location.pathname != "/" ? "menuPages" : ""}
        >
          <Container fluid>
            <NavLink to="/">
              <img src={Logo} id={ativaCorHeader ? "logoScroll" : "logo"} />
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/">
                    <Nav.Link href="/">Home</Nav.Link>
                  </NavLink>
                  <NavLink to="/sobre">
                    <Nav.Link href="/sobre">Sobre</Nav.Link>
                  </NavLink>
                  <NavLink to="/seguros">
                    <Nav.Link href="/seguros">Seguros</Nav.Link>
                  </NavLink>
                  <NavLink to="/blog">
                    <Nav.Link href="/blog">Blog</Nav.Link>
                  </NavLink>
                  <NavLink to="/contato">
                    <Nav.Link href="/sobre">Contato</Nav.Link>
                  </NavLink>
                  <NavLink to="/seguros">
                    <Nav.Link id="cote" href="/sobre">Cote Agora!</Nav.Link>
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
};

export default Header;
