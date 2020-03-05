import React, { useEffect } from 'react';
import './Dialog.css';

const Dialog = (props) => {
  const { close } = props;

  // Just run useEffect
  // useEffect runs a function at any point in time
  // of the component lifecycle that you want.
  // By default, it runs after a render or re-render
  useEffect(() => {
    // Put the code to run here
    console.log('The dialog component just finished rendering and useEffect runs.');
    setTimeout(() => {
      close();
    }, 2000);
  });

  return (
    <div className="dialogContainer">
      <div className="dialogOverlay">
        <div className="dialog">
          <h3>Dialog</h3>
          <p>Hello World!</p>
          <hr/>
          <button className="btn btn-default" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
