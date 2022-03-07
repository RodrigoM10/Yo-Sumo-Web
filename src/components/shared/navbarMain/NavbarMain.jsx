import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navbarMain.css'

export const NavbarMain = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Yo Sumo Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Crea una petición</Nav.Link>
        <Nav.Link href="#action2">Mis peticiones</Nav.Link>
        <Nav.Link href="#action2">Ultimas peticiones</Nav.Link>
      </Nav>
      <Nav.Link>
        <button variant="outline-success">Ingresá</button>
        <button variant="outline-success">Registrate</button>
      </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
