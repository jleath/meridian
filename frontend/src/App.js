import React, { useState, useEffect } from 'react';
import dsoService from './services/dsoService';
import DSO from './components/DSO';
import './index.css';

const App = () => {
  const [dsos, setDsos] = useState([]);

  useEffect(() => {
    const fetchDsos = async () => {
      const dsos = await dsoService.getDsos();
      setDsos(dsos.sort((a, b) => a.messier_no.slice(1) - b.messier_no.slice(1)));
    }
    fetchDsos();
  }, []);

  return (
    <>
      <h1>Messier Objects</h1>
      <div className="dso-collection">
        {dsos.map(dso => <DSO key={dso.id} dso={dso}/>)}
      </div>
    </>
  );
}

export default App;
