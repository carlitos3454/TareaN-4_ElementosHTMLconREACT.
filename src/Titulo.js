import React from 'react';

const Titulo = ({ texto, nivel = 1 }) => {
  // Asegura que nivel sea entre 1 y 6
  const nivelValido = nivel >= 1 && nivel <= 6 ? nivel : 1;
  const Tag = `h${nivelValido}`;

  return <Tag>{texto}</Tag>;
};

export default Titulo;