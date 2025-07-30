import React from 'react';
import Input from './Input';

const InputText = React.forwardRef((props, ref) => {
  return <Input type="text" ref={ref} {...props} />;
});

export default InputText;