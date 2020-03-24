import React, { useEffect } from 'react';
import './Modal.css';

const Modal = (props) => {
  const { close } = props;
  useEffect(() => {
    console.log('The Modal component just finished rendering and useEffect runs.');
    setTimeout(() => {
      close();
    }, 3000);
  });

  return (
    <div className="ModalContainer">
      <div className="ModalOverlay">
        <div className="Modal">
          <h3>Product Update</h3>
          <button className="btn btn-default" onClick={close}><i class="close icon"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Modal;