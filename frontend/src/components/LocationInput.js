import React, { useState } from 'react';

const LocationInput = props => {
  const [latitudeInput, setLatitudeInput] = useState('');
  const [longitudeInput, setLongitudeInput] = useState('');
  const [inputErrorMsg, setInputErrorMsg] = useState('');

  const handleLatitudeInputChange = event => {
    setLatitudeInput(event.target.value);
  };

  const handleLongitudeInputChange = event => {
    setLongitudeInput(event.target.value);
  };

  const handleCoordsSubmit = event => {
    event.preventDefault();
    const lat = Number(latitudeInput);
    const lon = Number(longitudeInput);
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
      setInputErrorMsg('Coordinates must be valid numbers');
      setLatitudeInput('');
      setLongitudeInput('');
    } else {
      props.setLocation(Number(latitudeInput), Number(longitudeInput));
    }
  };

  const handleCoordsReset = event => {
    event.preventDefault();
    setLatitudeInput('');
    setLongitudeInput('');
    props.useGeolocation();
  };

  return (
    <div>
      <p>{inputErrorMsg ? inputErrorMsg : ''}</p>
      <form onSubmit={handleCoordsSubmit} onReset={handleCoordsReset}>
        <input type="text" value={latitudeInput} onChange={handleLatitudeInputChange}></input>
        <input type="text" value={longitudeInput} onChange={handleLongitudeInputChange}></input>
        <button type="submit">Set Location</button>
        <button type="reset">Use Current Location</button>
      </form>
    </div>
  );
};

export default LocationInput;