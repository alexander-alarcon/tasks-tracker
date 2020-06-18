/* eslint-disable react/prop-types */
import React from 'react';

function Footer({ children }) {
  return (
    <footer className="fixed top-0 left-0 right-0 sm:bottom-0 sm:top-auto p-4 bg-white shadow-md">
      {children}
    </footer>
  );
}

export default Footer;
