import { string, func } from 'prop-types';
import React from 'react';

function Header({ title, date, onEdit, onRemove }) {
  const handleEdit = (ev) => {
    ev.preventDefault();
    onEdit();
  };

  const handleRemove = (ev) => {
    ev.preventDefault();
    onRemove();
  };

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
        <a
          href="#/"
          onClick={handleEdit}
          className="material-icons cursor-pointer"
        >
          edit
        </a>
        <a
          href="#/"
          onClick={handleRemove}
          className="material-icons cursor-pointer"
        >
          delete
        </a>
      </div>
    </header>
  );
}

Header.defaultProps = {
  onEdit: () => {},
  onRemove: () => {},
};

Header.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  onEdit: func,
  onRemove: func,
};

export default Header;
