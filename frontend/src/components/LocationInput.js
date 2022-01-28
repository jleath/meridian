import React, { useState } from 'react';

const LocationInput = props => {
  const [latitudeInput, setLatitudeInput] = useState('');
  const [longitudeInput, setLongitudeInput] = useState('');

  const handleLatitudeInputChange = event => {
    setLatitudeInput(event.target.value);
  };

  const handleLongitudeInputChange = event => {
    setLongitudeInput(event.target.value);
  };

  const handleCoordsSubmit = event => {
    event.preventDefault();
    props.setLocation(Number(latitudeInput), Number(longitudeInput));
  };

  const handleCoordsReset = event => {
    event.preventDefault();
    setLatitudeInput('');
    setLongitudeInput('');
    props.useGeolocation();
  };

  return (
    <form onSubmit={handleCoordsSubmit} onReset={handleCoordsReset}>
      <input type="text" value={latitudeInput} onChange={handleLatitudeInputChange}></input>
      <input type="text" value={longitudeInput} onChange={handleLongitudeInputChange}></input>
      <button type="submit">Set Location</button>
      <button type="reset">Use Current Location</button>
    </form>
  );
};

export default LocationInput;