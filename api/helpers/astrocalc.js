const DEFAULT_EPOCH = new Date('January 1, 2000, 11:58:55');

const hmsToDecimal = (degrees, minutes, seconds) => {
  const sign = degrees < 0.0 ? -1 : 1;
  degrees = Math.abs(degrees);
  minutes = Math.abs(minutes);
  seconds = Math.abs(seconds);
  return sign * (degrees + (minutes / 60.0) + (seconds / 3600.0));
};

const localSiderialTime = (dt, longitude, epoch=DEFAULT_EPOCH) => {
  const days = ((dt - epoch) / 1000) / (60.0 * 60.0 * 24.0);
  const hours = hmsToDecimal(dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds());
  const result = (100.46 + 0.985647 * days + longitude + 15 * hours) % 360;
  return result;
};

const asin = degrees => {
  return Math.asin(degrees) * 180 / Math.PI;
};

const sin = degrees => {
  return Math.sin(degrees * Math.PI / 180.0);
};

const cos = degrees => {
  return Math.cos(degrees * Math.PI / 180.0);
};

const acos = degrees => {
  return Math.acos(degrees) * 180.0 / Math.PI;
};

const calculateAltAz = (ra, dc, dt, lat, lon) => {
  const hourAngle = (localSiderialTime(dt, lon) - ra) % 360;
  const alt = asin(sin(dc) * sin(lat) + cos(dc) * cos(lat) * cos(hourAngle));
  const a = acos((sin(dc) - sin(alt) * sin(lat)) / (cos(alt) * cos(lat)));
  const az = sin(hourAngle) < 0.0 ? a : 360 - a;
  return [alt, az];
};

module.exports = calculateAltAz;