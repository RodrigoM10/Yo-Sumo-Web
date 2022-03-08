import React from 'react'
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { PUBLIC_PATHS_NAV } from '../../../routes/config';
import ButtonYoSumo from '../../button/ButtonYoSumo';
import { NavbarLinks } from '../sideBar/NavbarLinks';
import NavbarOffcanvas from '../sideBar/NavbarOffcanvas';
import './navbarMain.css'

export const NavbarMain = () => {
  return (
    <Navbar className="navbar-main-style" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Yo Sumo Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <NavbarOffcanvas />
        <Navbar.Collapse className='d-none d-lg-inline'>
          <Nav
            className="mx-auto"
          >
            {PUBLIC_PATHS_NAV.map((path, i) => {
              return <NavbarLinks route={path.ROUTE} link={path.PLACEHOLDER} key={i} />;
            })}
          </Nav>
          <ButtonYoSumo path='/login' placeholder="Ingresá" />
          <ButtonYoSumo path='/register' placeholder="Registrate" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
