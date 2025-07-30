// src/components/InputPassword.js
import React from 'react';
import Input from './Input';

const InputPassword = React.forwardRef((props, ref) => {
  return <Input type="password" ref={ref} {...props} />;
});

export default InputPassword;