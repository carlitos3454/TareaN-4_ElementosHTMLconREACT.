// src/components/InputURL.js
import React from 'react';
import Input from './Input';

const InputURL = React.forwardRef((props, ref) => {
  return <Input type="url" ref={ref} {...props} />;
});

export default InputURL;