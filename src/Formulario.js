import React from 'react';

const Formulario = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="p-3 border rounded">
      {children}
    </form>
  );
};

export default Formulario;