import React, { useState, useEffect } from 'react';
import dsoService from './services/dsoService';
import DSO from './components/DSO';
import './index.css';

const App = () => {
  const [dsos, setDsos] = useState([]);
  const [latitude, setLatitude] = useState(NaN);
  const [longitude, setLongitude] = useState(NaN)

  useEffect(() => {
    const success = pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    };
    const error = err => {
      console.log(err);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error, options);
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
        setDsos(dsoResults.sort((a, b) => a.messier_no.slice(1) - b.messier_no.slice(1)));
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
