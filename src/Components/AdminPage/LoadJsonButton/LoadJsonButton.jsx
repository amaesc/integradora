import React, { useState } from 'react';
import axios from 'axios';

const LoadJsonButton = () => {
  const [message, setMessage] = useState('');
  const [jsonData, setJsonData] = useState(null);

  const handleLoadJson = async () => {
    try {
//      const response = await axios.get('http://localhost:5000/api/json');
      const response = await axios.get('https://express-production-e5e6.up.railway.app/api/json');

      console.log("JSON cargado", response.data);

      setJsonData(response.data.data);
      setMessage('JSON cargado correctamente desde la base de datos');
    } catch (error) {
      console.error('Error al cargar el JSON:', error);
      setMessage('Hubo un error al cargar el JSON');
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between", color: "black"}}>
      <button onClick={handleLoadJson}>Load JSON from Database</button>
      <div>{message}</div>
    </div>
  );
};

export default LoadJsonButton;
