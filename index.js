require('dotenv').config()

const throng = require('throng')
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-hbs')
const output = require('./utils/output')
require('./utils/views')
require('./utils/proto');

const WORKER_COUNT = process.env.WEB_CONCURRENCY || 1

throng({
  start: start,
  workers: WORKER_COUNT,
  lifetime: Infinity
})

function start () {
  
  const app = express()
  app.use(express.static(__dirname + '/public'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.set('port', (process.env.PORT || 9000))
  app.set('view engine', 'hbs')
  app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/layouts/main.hbs',
    layoutsDir: __dirname + '/views/layouts'
  }))

  app.get('/', (request, response) => {
    response.render('index', {
      query: request.query,
      env: process.env
    })
  })

  app.get('*', (request, response) => {
    response.render('error')
  })

  app.listen(app.get('port'), () => {
    const url = `http://localhost:${app.get('port')}`
    const pretty = output.style(url, ['bold', 'underline', 'green'])
    output(`App is running: ${pretty}`)
  })

}
