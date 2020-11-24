import React from 'react';

const Item = ({...props}) => {
  return (
    <li>{props.children}</li>
  );
};

export default Item;