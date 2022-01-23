import axios from 'axios';
const DSO_DB_URL = 'http://localhost:3003/dsos';

const getDsos = async () => {
  const response = await axios.get(DSO_DB_URL);
  return response.data;
};

const dsoService = {
  getDsos,
};

export default dsoService;