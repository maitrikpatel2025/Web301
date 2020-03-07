import React from 'react';
import './CaretButton.css';

const CaretButton = (props) => {
  const { children, handleClick } = props;
  return (
    <button class="ui blue button"  onClick={handleClick}>
      {children}
    </button>
  )
};
export default CaretButton;