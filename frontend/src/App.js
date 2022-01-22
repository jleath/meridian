import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3003/dsos';

const DSO = ({ dso }) => {
  return (
    <div>
      <h1>{dso.id} - {dso.name}</h1>
    </div>
  );
};

const App = () => {
  const [dsos, setDsos] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        setDsos(response.data);
      });
  }, []);

  return (
    <>
      {dsos.map(dso => <DSO dso={dso}/>)}
    </>
  );
}

export default App;
