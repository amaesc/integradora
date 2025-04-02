import React, { useEffect, useState } from 'react';
import './CoorsDisplay.css';

const CoorsDisplay = () => {
  const [textData, setTextData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/polygonData.txt') // Make sure polygonData.txt is inside the "public" folder
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        return response.text(); // Get raw text instead of JSON
      })
      .then((text) => {
        setTextData(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching file: ${err.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading file...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div className="text-container">
      <h1>Text File Contents of Campus</h1>
      <div className="text-content">
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {textData}
        </pre>
      </div>
    </div>
  );
};

export default CoorsDisplay;
