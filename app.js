require('dotenv').config()
const debug = require('debug')('app')
const { useConnection } = require('./connector')

async function startApp () {
  debug('starting metaquery ...')

  const statement = 'SELECT * from users'

  useConnection(async function (dbConn) {
    dbConn.query(statement, (error, results) => {
      if (error) return console.error(error.message)

      debug('results are: ', results)
    })
  })
}

module.exports = {
  startApp
}
