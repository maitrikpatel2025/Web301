import React from 'react';

const Number = (props) => {
  const { count } = props;
  return (
    <div className="">
      <span className="Number">
      {count}
      </span>
    </div>
  );
};

export default Number;