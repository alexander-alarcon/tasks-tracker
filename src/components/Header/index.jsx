import { string } from 'prop-types';
import React from 'react';

function Header({ title, date }) {
  return (
    <header className="flex items-center">
      <div className="flex-1">
        <div className="font-bold">{title}</div>
        <span className="text-xs italic opacity-75">{date}</span>
      </div>
      <div className="actions flex items-center text-sm">
        <span className="material-icons cursor-pointer">check_box</span>
        <span className="material-icons cursor-pointer">
          check_box_outline_blank
        </span>
        <span className="material-icons cursor-pointer">edit</span>
        <span className="material-icons cursor-pointer">delete</span>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
};

export default Header;
