const dsoRouter = require('express').Router();
const config = require('../util/config')

const Pool = require('pg').Pool;
const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
});

const selectString = 'SELECT * FROM dsos';
const createString = 'INSERT INTO dsos (messier_no, name, type, constellation, magnitude, ascension, declination) VALUES ($1, $2, $3, $4, $5, $6, $7)';

dsoRouter.get('/', (request, response) => {
  pool.query(selectString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

dsoRouter.post('/', (request, response) => {
  const { messier_no, name, type, constellation, magnitude, ascension, declination } = request.body;
  const dsoData = [messier_no, name, type, constellation, magnitude, ascension, declination];
  pool.query(createString, dsoData, (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`dso add (id: ${result.insertId}`);
    });
});

module.exports = dsoRouter;