const config = require('./util/config')
const messierData = require('./data/messierData')

const Pool = require('pg').Pool;
const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
});

const createString = 'INSERT INTO dsos (messier_no, name, type, constellation, magnitude, ascension, declination) VALUES ($1, $2, $3, $4, $5, $6, $7)';

// drop all rows
// pool.query('DELETE FROM dsos', (error, results) => {
//   if (error) {
//     throw error;
//   }
//   console.log(results);
// });
// insert from messierData.js one at a time
Object.keys(messierData).forEach(key => {
  const obj = messierData[key];
  const data = [
    key,
    obj.name,
    obj.type,
    obj.constellation,
    obj.magnitude,
    obj.ascension,
    obj.declination,
  ];
  pool.query(createString, data, (error, result) => {
    if (error) {
      throw error;
    }
  });
  console.log(`added ${key}`);
});

// dsoRouter.post('/', (request, response) => {
//   const { name, type, constellation, magnitude, ascension, declination } = request.body;
//   const dsoData = [name, type, constellation, magnitude, ascension, declination];
//   pool.query(createString, dsoData, (error, result) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(`dso add (id: ${result.insertId}`);
//     });
// });

// module.exports = dsoRouter;