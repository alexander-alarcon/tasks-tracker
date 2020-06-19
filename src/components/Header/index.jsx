/* eslint-disable react/prop-types */
import React from 'react';

function Header({ title, date }) {
  return (
    <header className="flex items-center">
      <div className="flex-1">
        <div className="font-bold">{title}</div>
        <span className="text-gray-700 text-xs italic">{date}</span>
      </div>
      <div className="actions flex items-center text-sm">
        <span className="material-icons cursor-pointer text-gray-600">
          check_box
        </span>
        <span className="material-icons cursor-pointer text-gray-600">
          check_box_outline_blank
        </span>
        <span className="material-icons cursor-pointer text-gray-600">
          edit
        </span>
        <span className="material-icons cursor-pointer text-gray-600">
          delete
        </span>
      </div>
    </header>
  );
}

export default Header;
