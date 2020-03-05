import React from 'react';
import Button  from '@material-ui/core/Button';
import './CaretButton.css';

const CaretButton = (props) => {
  const { children, handleClick } = props;
  return (
    <Button className="CaretButton" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default CaretButton;