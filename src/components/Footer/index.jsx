import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';

function Footer({ children }) {
  return (
    <footer className="fixed top-0 left-0 right-0 sm:bottom-0 sm:top-auto p-4 bg-white shadow-md">
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Footer;
