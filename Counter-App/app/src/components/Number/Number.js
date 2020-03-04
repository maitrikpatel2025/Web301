import React from 'react';

const Number = (props) => {
  const { count } = props;
  return (
    <div className="number">
      {count}
    </div>
  );
};

export default Number;
