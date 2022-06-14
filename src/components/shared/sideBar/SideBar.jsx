import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavbarLinks } from './NavbarLinks';
import { useDispatch, useSelector } from 'react-redux';
import { BiLogOutCircle } from 'react-icons/bi';
import { selectAuth } from '../../../reducers/auth/authReducer';
import { PUBLIC_PATHS_NAV } from '../../../routes/config';
import { getLogout } from '../../../reducers/auth/actions';
import { NavLink } from 'react-router-dom';
import GoogleAuth from '../../googleAuth/GoogleAuth';
import './sideBar.css';

const Sidebar = () => {
    const isAuthenticated = useSelector(selectAuth);
    
  const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(getLogout());
        window.location.href = '/';
      };
    return (
        <Nav className="mx-auto">
            {PUBLIC_PATHS_NAV.map((path, i) => {
                return <NavbarLinks route={path.ROUTE} link={path.PLACEHOLDER} key={i} />;
            })}
            <div className="mt-4 mx-auto">
                {isAuthenticated ? (
                    <Nav.Link as={NavLink} to="/" onClick={(e) => handleLogout(e)} className="btn-yosumo" activeclassname="link-active">Logout <BiLogOutCircle /></Nav.Link>
                ) : (
                    <div className="d-flex justify-content-center align-items-center">
                         <GoogleAuth />
                    </div>
                )}
            </div>
        </Nav>
    );
};

export default Sidebar;