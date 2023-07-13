require('dotenv').config()

const mysql = require('mysql')
const config = require('./config/database')

async function useConnection (queryFn) {
  const connection = mysql.createConnection(config)

  try {
    await queryFn(connection)
  } finally {
    await connection.end()
  }
}

module.exports = {
  useConnection
}
