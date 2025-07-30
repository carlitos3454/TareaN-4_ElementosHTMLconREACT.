import React from 'react';

const Input = React.forwardRef(({ type = 'text', className, ...props }, ref) => {
  return <input type={type} ref={ref} className={className} {...props} />;
});

export default Input;