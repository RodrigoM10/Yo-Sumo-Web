import React from 'react'
import {  Container, Nav, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';
import { getLogout } from '../../../reducers/auth/actions';
import { selectAuth } from '../../../reducers/auth/authReducer';
import { PUBLIC_PATHS_NAV } from '../../../routes/config';
import GoogleAuth from '../../googleAuth/GoogleAuth';
import { NavbarLinks } from '../sideBar/NavbarLinks';
import NavbarOffcanvas from '../sideBar/NavbarOffcanvas';
import './navbarMain.css'

export const NavbarMain = () => {

  const isAuthenticated = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(getLogout());
    window.location.href = '/';
  };
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
          {isAuthenticated ?
              <Nav.Link as={NavLink} to="/" onClick={(e) => handleLogout(e)} className="btn-yosumo" activeclassname="link-active">Logout <BiLogOutCircle /></Nav.Link>
            : 
              <GoogleAuth />
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
