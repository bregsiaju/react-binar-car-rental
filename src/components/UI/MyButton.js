import React from 'react';

import { Button } from 'react-bootstrap';

const MyButton = (props) => {
  return (
    <Button variant="success" className={props.className} type={props.type} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default MyButton;