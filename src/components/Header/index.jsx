import { string, func, bool } from 'prop-types';
import React from 'react';
import clsx from 'clsx';

function Header({ title, date, onEdit, onRemove, onCheck, isCompleted }) {
  const handleEdit = (ev) => {
    ev.preventDefault();
    onEdit();
  };

  const handleRemove = (ev) => {
    ev.preventDefault();
    onRemove();
  };

  const handleCheck = (ev) => {
    ev.preventDefault();
    onCheck();
  };

  return (
    <header className="flex">
      <div
        className={clsx('flex-1', {
          'line-through': isCompleted,
        })}
      >
        <div className="font-bold">{title}</div>
        <span className="text-xs italic opacity-75">{date}</span>
      </div>
      <div className="actions flex text-sm">
        <a
          href="#/"
          onClick={handleCheck}
          className="material-icons cursor-pointer"
        >
          {isCompleted ? 'check_box_outline_blank' : 'check_box'}
        </a>
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
  onCheck: () => {},
  onRemove: () => {},
  isCompleted: false,
};

Header.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  onEdit: func,
  onCheck: func,
  onRemove: func,
  isCompleted: bool,
};

export default Header;
