const express = require('express')
const { DEFAULT_PORT } = require('./config')
const homeRouter = require('./routes/home')

const PORT = process.env.PORT || DEFAULT_PORT
const app = express()

app.use('/', homeRouter)

app.listen(PORT)
