// src/components/InputSearch.js
import React from 'react';
import Input from './Input';

const InputSearch = React.forwardRef((props, ref) => {
  return <Input type="search" ref={ref} {...props} />;
});

export default InputSearch;