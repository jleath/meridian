import React, { useState, useEffect } from 'react';
import dsoService from './services/dsoService';
import DSO from './components/DSO';
import LocationInput from './components/LocationInput';
import './index.css';

const App = () => {
  const [dsos, setDsos] = useState([]);
  const [latitude, setLatitude] = useState(NaN);
  const [longitude, setLongitude] = useState(NaN)
  const [contentLoaded, setContentLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  const useGeolocation = () => {
    const success = pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
      setContentLoaded(true);
    };
    const error = err => {
      setLoadFailed(true);
      console.log(err);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if ('geolocation' in navigator) {
      setContentLoaded(false);
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  };

  useEffect(useGeolocation, []);

  useEffect(() => {
    const fetchDsos = async () => {
      let dsoResults;
      setContentLoaded(false);
      if (!Number.isNaN(latitude) && !Number.isNaN(longitude)) {
        dsoResults = await dsoService.getDsosWithLocation(latitude, longitude, Date.now());
      }
      if (dsoResults) {
        setContentLoaded(true);
        setDsos(dsoResults.sort((a, b) => a.messier_no.slice(1) - b.messier_no.slice(1)));
      } else {
      }
    }
    fetchDsos();
  }, [latitude, longitude]);

  const setLocation = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  const DSOCollection = () => {
    return (
      <div className="dso-collection">
        {dsos.map(dso => <DSO key={dso.id} dso={dso}/>)}
      </div>
    );
  };

  return (
    <>
      <h1>Messier Objects</h1>
      <LocationInput useGeolocation={useGeolocation} setLocation={setLocation}/>
      <p>{latitude && longitude ? `Using Coordinates (${latitude}, ${longitude})`: 'No coordinates specified'}</p>
      { contentLoaded ? <DSOCollection/> : <div className="loader">Loading...</div>}
      <p>{ loadFailed ? 'Failed to load content' : ''}</p>
    </>
  );
}

export default App;
