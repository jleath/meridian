const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const selectString = 'SELECT * FROM dsos';
const createString = 'INSERT INTO dsos (name, type, constellation, magnitude, ascension, declination) VALUES ($1, $2, $3, $4, $5, $6';

const getDsos = (request, response) => {
  pool.query(selectString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createDso = (request, response) => {
  const { name, type, constellation, magnitude, ascension, declination } = request.body;
  const dsoData = [name, type, constellation, magnitude, ascension, declination];
  const createString = 'INSERT INTO dsos (name, type, constellation, magnitude, ascension, ' +
    'declination) VALUES ($1, $2, $3, $4, $5, $6);';

  pool.query(createString, dsoData, (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`dso add (id: ${result.insertId}`);
    });
};

module.exports = {
  getDsos,
  createDso,
};
