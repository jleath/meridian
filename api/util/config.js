require('dotenv').config();

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  PORT,
  DB_USER,
  DB_HOST,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  MONGODB_URI,
};