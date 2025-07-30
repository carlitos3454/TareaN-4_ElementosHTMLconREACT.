import React from 'react';

import Imagen from './Image';
import Titulo from './Titulo';
import Parrafo from './Parrafo';
import Enlace from './Enlace';
import Lista from './Lista';
import Tabla from './Tabla';
import FormularioCompleto from './FormularioCompleto';

const App = () => {
  // Datos de prueba
  const listaElementos = ['React', 'Bootstrap', 'Hook Form'];
  const cabeceraTabla = ['Nombre', 'Edad'];
  const datosTabla = [
    ['Carlos Yánez', 25],
    ['Ana Torres', 30],
    ['Luis Flores', 40],
  ];

  return (
    <div className="container mt-4">
      <Imagen
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Logo de React"
        width="100"
        height="100"
      />
      <Titulo texto="Mi Aplicación con React" nivel={1} />
      <Parrafo texto="Se explica el funcinamiento de mi programa con react busque cargar una imagen haciendo simbolo a la misma." />
     <Enlace texto="Recomendable visitar React para mas informacion" href="https://es.react.dev/" />
      <Lista elementos={listaElementos} />
      <Tabla cabecera={cabeceraTabla} datos={datosTabla} />
      <FormularioCompleto />
    </div>
  );
};

export default App;