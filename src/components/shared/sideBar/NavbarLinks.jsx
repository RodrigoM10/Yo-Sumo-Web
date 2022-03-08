import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavbarLinks = ({ route, link }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active-navbar-link my-3 my-lg-0" : "navbar-link my-3  my-lg-0")}
        to={route}
      >
        {link}
      </NavLink>
    </>
  )
};