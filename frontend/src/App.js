import React, { useState, useEffect } from 'react';
import dsoService from './services/dsoService';
import DSO from './components/DSO';

const App = () => {
  const [dsos, setDsos] = useState([]);

  useEffect(() => {
    const fetchDsos = async () => {
      const dsos = await dsoService.getDsos();
      setDsos(dsos);
    }
    fetchDsos();
  }, []);

  return (
    <div>
      <h1>Messier Objects</h1>
      {dsos.map(dso => <DSO key={dso.id} dso={dso}/>)}
    </div>
  );
}

export default App;
