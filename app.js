require('dotenv').config()
const debug = require('debug')('app')
const { useConn, exec } = require('./connector')

async function startApp () {
  debug('starting metaquery ...')


  await useConn(async function (dbConn) {

    const results = await exec(dbConn, 'SHOW databases')

    databases = results
      .map( result => result['Database'])

    debug('databases count: ', databases.length)

    const sqlStatement = `SQL`

    const allMyResults = []
    for ([index, database] of databases.entries()) {
      debug(`USE ${database} ...`)
      await exec(dbConn, `USE ${database}`)
      const myresult = 
        await exec(dbConn, sqlStatement)
      const jsonResult = JSON.parse(JSON.stringify(myresult))
      
      if (myresult.length > 0) allMyResults.push([database, jsonResult])

      debug(`progress: ${(index+1)/databases.length*100}%`)
    }

    debug("Result size: ", allMyResults.length)
  })
}

module.exports = {
  startApp
}