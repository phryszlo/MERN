const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')
const express = require('express')

require('dotenv').config()
require("./config/database")


const app = new express()

app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'build')))


// directions for how to use the tools


// API routes go before the catchall ('/*')
app.use('/api/users', require('./routes/api/users'));


// the catchall: this pertains to non-API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`on ${PORT}`))

