import React from 'react';
import { Navbar, NavLink, Offcanvas } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import Sidebar from './SideBar';

const NavbarOffcanvas = () => {
    return (
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                    {/* <Image className="image-logo" src={logo} alt="Img Logo" /> */}
                    Yo Sumo Logo
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body-sidebar">
                <Sidebar />
                <div className="divider-us"></div>
                <div className='d-flex flex-column justify-content-center aling-items-center'>
                    <h3 className="text-center">Seguinos en nuestras redes</h3>
                    <div className="d-flex justify-content-center aling-items-center sidebar-social-icons-container">
                        <NavLink to="">
                            <FaLinkedinIn />
                        </NavLink>
                        <NavLink to="">
                            <RiInstagramFill />
                        </NavLink>
                        <NavLink to="">
                            <FaTwitter />
                        </NavLink>
                    </div>
                </div>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    )
}

export default NavbarOffcanvas