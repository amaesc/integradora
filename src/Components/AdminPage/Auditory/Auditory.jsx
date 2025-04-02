import React, { useEffect, useState } from 'react';
import './Auditory.css'

const AuditoryDisplay = () => {
  const [translations, setTranslations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetch('http://localhost:5000/getAuditory')
    fetch('https://express-production-e5e6.up.railway.app/getAuditory')
      .then((response) => response.text()) // Get response as text first
      .then((text) => {
        try {
          const data = JSON.parse(text); // Manually parse the JSON
          setTranslations(data);
          setLoading(false);
        } catch (error) {
          setError('Error parsing JSON: ' + error.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError('Error fetching file: ' + err.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading translations...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="translations-container">
      <h1>Auditory</h1>
      <div className="translations-content">
        <pre>{JSON.stringify(translations, null, 2)}</pre>
      </div>
    </div>
  );
};

export default AuditoryDisplay;
