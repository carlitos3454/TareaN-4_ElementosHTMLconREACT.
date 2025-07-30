// src/components/InputTel.js
import React from 'react';
import Input from './Input';

const InputTel = React.forwardRef((props, ref) => {
  return <Input type="tel" ref={ref} {...props} />;
});

export default InputTel;