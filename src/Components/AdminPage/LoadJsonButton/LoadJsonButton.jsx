import React, { useState } from 'react';
import axios from 'axios';

const LoadJsonButton = () => {
  const [message, setMessage] = useState('');
  const [jsonData, setJsonData] = useState(null);

  const handleLoadJson = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/json');
      console.log("JSON cargado", response.data);

      setJsonData(response.data.data);
      setMessage('JSON cargado correctamente desde la base de datos');
    } catch (error) {
      console.error('Error al cargar el JSON:', error);
      setMessage('Hubo un error al cargar el JSON');
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between", color: "white"}}>
      <button onClick={handleLoadJson}>Cargar JSON desde la base de datos</button>
      <div>{message}</div>
    </div>
  );
};

export default LoadJsonButton;
