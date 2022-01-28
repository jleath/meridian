const dsoRouter = require('express').Router();
const Comment = require('../models/Comment');
const config = require('../util/config')
const logger = require('../util/logger');
const astrocalc = require('../helpers/astrocalc');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
});

const createString = 'INSERT INTO dsos (messier_no, name, type, constellation, magnitude, ascension, declination) VALUES ($1, $2, $3, $4, $5, $6, $7)';

dsoRouter.get('/', (request, response) => {
  const selectString = 'SELECT * FROM dsos ORDER BY messier_no';
  logger.info(`Querying Postgres: ${selectString}`);
  pool.query(selectString, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

dsoRouter.get('/:latitude/:longitude/:currTime', async (request, response) => {
  const latitude = Number(request.params.latitude);
  const longitude = Number(request.params.longitude);
  const currTime = new Date(Number(request.params.currTime));
  const selectString = 'SELECT * FROM dsos ORDER BY messier_no';
  const result = await pool.query(selectString);
  const dsos = result.rows.map(dso => {
    const ra = Number(dso.ascension);
    const dc = Number(dso.declination);
    const [alt, az] = astrocalc(ra, dc, currTime, latitude, longitude);
    return {
      ...dso,
      alt,
      az,
    };
  });
  const filtered = dsos.filter(dso => {
    return dso.alt < 90 && dso.alt > 0;
  });
  response.status(200).json(filtered);
})

dsoRouter.get('/:id', async (request, response) => {
  const id = request.params.id;
  logger.info(`Querying Mongo: ${id}`);
  const dsoComments = await Comment.find({'dsoId': Number(request.params.id)});
  const selectString = `SELECT * FROM dsos WHERE id = ${id}`;
  logger.info(`Querying Postgres: ${selectString}`);
  pool.query(selectString, (error, results) => {
    if (error) {
      throw error;
    }
    console.log({ data: results.rows, dsoComments });
    response.status(200).json({ data: results.rows, dsoComments });
  })
})

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