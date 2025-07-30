import React from 'react';

const Lista = ({ elementos = [] }) => {
  return (
    <ul>
      {elementos.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default Lista;