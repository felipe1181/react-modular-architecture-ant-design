import React from 'react';
import { Input as TextField } from 'antd';

function Input({...props}) {
  return (
        <TextField {...props} />
    );
}

export default Input;