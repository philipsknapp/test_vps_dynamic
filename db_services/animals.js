const { Client } = require('pg')
require('dotenv').config({path: '../.env'})

async function connect() {
  try {
    const client = new Client({
      user: process.env.ANIMALS_DB_USER,
      password: process.env.ANIMALS_DB_PASSWORD,
      host: process.env.ANIMALS_DB_HOST,
      port: process.env.ANIMALS_DB_PORT,
      database: process.env.ANIMALS_DB_NAME
    })

    await client.connect()
    return client;

  } catch (err) {
    console.error(err);
  }
}

async function selectAll() {
  let client;
  try {
    client = await connect()
    const result = await client.query('SELECT * FROM animals');
    return result.rows;
  } catch (err) {
    console.error(err)
  } finally {
    if (client) {
      await client.end()
    }
  }
}

module.exports = { selectAll }


