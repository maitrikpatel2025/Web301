import React from 'react';

const Number = (props) => {
  const { Count } = props;
  return (
    <div className="">
      <span className="Number">
      {Count}
      </span>
    </div>
  );
};

export default Number;