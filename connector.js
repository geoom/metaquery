require('dotenv').config()

const mysql = require('mysql')
const config = require('./config/database')

async function useConn (queryFn) {
  const connection = mysql.createConnection(config)

  try {
    await queryFn(connection)
  } finally {
    await connection.end()
  }
}

function exec (dbConn, statement) {
  return new Promise((resolve) => {
    dbConn.query(statement, (error, results) => {
      if (error) {
        throw error
      }
      
      resolve(results)
    })
  })
}

module.exports = {
  useConn,
  exec
}
