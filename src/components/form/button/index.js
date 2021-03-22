import React from 'react';
import { Button as Btn } from 'antd';

function Button({...props}) {
  return (
    <Btn {...props}/>
    );
}

export default Button;