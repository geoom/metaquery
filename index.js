require('dotenv').config()
const { startApp } = require('./app')

const debug = require('debug')('index')
const name = 'metaquery codebase'

debug('wellcome to %s', name)
debug('This is %s environment', process.env.NODE_ENV)

startApp()
