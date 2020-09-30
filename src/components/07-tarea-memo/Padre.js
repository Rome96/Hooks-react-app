import React, { useState, useCallback } from 'react';
import './padre.css';
import { Hijo } from './Hijo';

const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // const incrementar = (num) => {
  //   setValor(valor + num);
  // };

  const incrementar = useCallback((num) => {
    setValor(v => v + num);
  }, [setValor]);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n, i) => (
        <Hijo key={i} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};

export default Padre;
