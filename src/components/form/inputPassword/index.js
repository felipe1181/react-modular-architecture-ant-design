import React from 'react';
import { Input as TextField } from 'antd';

function InputPassword({...props}) {
  return ( 
        <TextField.Password {...props}  />
  );
}

export default InputPassword;