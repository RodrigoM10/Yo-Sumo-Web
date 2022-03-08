import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavbarLinks } from './NavbarLinks';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../reducers/auth/authReducer';
import { PUBLIC_PATHS_NAV } from '../../../routes/config';

import './sideBar.css';

const Sidebar = () => {
    const isAuthenticated = useSelector(selectAuth);

    return (
        <Nav className="mx-auto">
            {PUBLIC_PATHS_NAV.map((path, i) => {
                return <NavbarLinks route={path.ROUTE} link={path.PLACEHOLDER} key={i} />;
            })}
            <div className="mt-4">
                {isAuthenticated ? (
                    <span>LOGOUT</span>
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                        <Nav.Link to="/login">
                            <button className="btn-yosumo" variant="outline-success">Ingresá</button>
                        </Nav.Link>
                        <Nav.Link to="/register">
                            <button className="btn-yosumo" variant="outline-success">Registrate</button>
                        </Nav.Link>
                    </div>
                )}
            </div>
        </Nav>
    );
};

export default Sidebar;