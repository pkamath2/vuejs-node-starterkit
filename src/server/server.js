const express = require('express')
const history = require('connect-history-api-fallback')
const configureAPI = require('./configure')
const app = express()

const { PORT = 3000 } = process.env

// API
configureAPI(app)

// UI
const publicPath = __dirname + '/../../dist/client'
console.log(publicPath)
const staticConf = { maxAge: '1y', etag: false }

app.use(express.static(publicPath, staticConf))
app.use('/', history())

// Go
app.listen(PORT, () => console.log(`App running on port ${PORT}!`))