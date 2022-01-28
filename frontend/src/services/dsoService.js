import axios from 'axios';
const DSO_DB_URL = 
  process.env.NODE_ENV === 'development' ? 'http://localhost:3003/dsos' : 'https://messier.api.joshleath.com/dsos';

const getDsos = async () => {
  const response = await axios.get(DSO_DB_URL);
  return response.data;
};

const getDsosWithLocation = async (latitude, longitude, currTime) => {
  const response = await axios.get(`${DSO_DB_URL}/${latitude}/${longitude}/${currTime}`);
  return response.data;
}

const dsoService = {
  getDsos,
  getDsosWithLocation,
};

export default dsoService;