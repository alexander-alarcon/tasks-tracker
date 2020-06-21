import React, { useRef, useEffect } from 'react';
import { bool, func, string, arrayOf, node, oneOfType } from 'prop-types';

import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal({ isOpen, onClose, title, children }) {
  const elRef = useRef(document.createElement('div'));
  const closeRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  useEffect(() => {
    function handleKeyUp(ev) {
      if (ev.keyCode === 27) {
        onClose();
      }
    }

    function handleFocus(ev) {
      if (ev.target.nodeName && !elRef.current.contains(ev.target)) {
        closeRef.current.focus();
      }
    }

    if (isOpen) {
      window.addEventListener('keyup', handleKeyUp);
      window.addEventListener('focus', handleFocus, true);
      closeRef.current.focus();
    }

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('focus', handleFocus, true);
    };
  }, [isOpen, onClose]);

  const modal = (
    <div
      className="modal opacity-1 fixed w-full h-full top-0 left-0 flex items-center justify-center"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal={isOpen.toString()}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            {title && (
              <p className="text-2xl font-bold" id="modal-title">
                {title}
              </p>
            )}
            <button
              className="modal-close cursor-pointer z-50"
              type="button"
              onClick={onClose}
              ref={closeRef}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(modal, elRef.current) : null;
}

Modal.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  title: string,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Modal;
