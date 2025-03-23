import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('jsonFile', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading file.');
      console.error(error);
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between", color: "white"}}>
      <input type="file" onChange={onFileChange} accept=".json" />
      <button onClick={onUpload}>Upload</button>
      <div>{message}</div>
    </div>
  );
};

export default FileUpload;
