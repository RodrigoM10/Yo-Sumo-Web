import React from 'react';
import { Footer } from '../components/shared/footer/Footer';
import { NavbarMain } from '../components/shared/navbarMain/NavbarMain';

const PublicLayout = ({ children }) => {

  return (
    <div className='schema-page'>
      <NavbarMain />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;