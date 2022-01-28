import React, { useState, useEffect } from 'react';
import dsoService from './services/dsoService';
import DSO from './components/DSO';
import './index.css';

const App = () => {
  const [dsos, setDsos] = useState([]);
  const [latitude, setLatitude] = useState(NaN);
  const [longitude, setLongitude] = useState(NaN)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
    }
  }, []);

  useEffect(() => {
    const fetchDsos = async () => {
      let dsoResults;
      if (!Number.isNaN(latitude) && !Number.isNaN(longitude)) {
        dsoResults = await dsoService.getDsosWithLocation(latitude, longitude, Date.now());
      } else if (Number.isNaN(latitude) && Number.isNaN(longitude)) {
        dsoResults = await dsoService.getDsos();
      }
      if (dsoResults) {
        setDsos(dsoResults);
      }
    }
    fetchDsos();
  }, [latitude, longitude]);

  return (
    <>
      <h1>Messier Objects</h1>
      <p>{latitude && longitude ? `Using Coordinates (${latitude}, ${longitude})`: 'No coordinates specified'}</p>
      <div className="dso-collection">
        {dsos.map(dso => <DSO key={dso.id} dso={dso}/>)}
      </div>
    </>
  );
}

export default App;
