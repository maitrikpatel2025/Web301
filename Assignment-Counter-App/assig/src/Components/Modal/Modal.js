import React, { useEffect } from 'react';
import './Modal.css';

const Modal = (props) => {
  const { close } = props;
  useEffect(() => {
    console.log('The Modal component just finished rendering and useEffect runs.');
    setTimeout(() => {
      close();
    }, 2000);
  });

  return (
    <div className="ModalContainer">
      <div className="ModalOverlay">
        <div className="Modal">
          <h3>Modal</h3>
          <p>Item update</p>
          <hr/>
          <button className="btn btn-default" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;