require('dotenv').config()
const debug = require('debug')('app')
const { useConn, exec } = require('./connector')


function jsonToCsv(items) {
  const header = Object.keys(items[0])

  const headerString = header.join(',')
  debug("headerString ", headerString)

  // handle null or undefined values here
  const replacer = (key, value) => value ?? ''

  const rowItems = items.map((row) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(',')
  )

  // join header and body, and break into separate lines
  const csv = [headerString, ...rowItems].join('\r\n')

  return csv
}


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
      
      if (myresult.length > 0) allMyResults.push(jsonResult)

      debug(`progress: ${(index+1)/databases.length*100}%`)
    }

    const csv = jsonToCsv(allMyResults.flat(1))

    debug("CSV result \n", csv)
  })
}

module.exports = {
  startApp
}