import React from 'react';

import { Button } from 'react-bootstrap';

const MyButton = (props) => {
  return (
    <Button variant="success" className={props.className}>
      {props.children}
    </Button>
  );
};

export default MyButton;