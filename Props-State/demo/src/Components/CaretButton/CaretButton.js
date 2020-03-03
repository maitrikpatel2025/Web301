import React from 'react';

const CaretButton = (props) => {
  const {children,handleclick} = props;
  return (
    <button onclick={handleclick}>
      {children}
    </button>
  );
};
export default CaretButton;