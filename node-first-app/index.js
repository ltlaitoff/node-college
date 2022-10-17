const mongoose = require('mongoose')
const express = require('express')
const { DEFAULT_PORT } = require('./config')
const homeRouter = require('./routes/home')

mongoose.connect('mongodb://127.0.0.1:27017/db_users', function (err) {
	if (err) {
		console.error('[MongoDB]: Error')
		throw err
	}

	console.log('[MongoDB]: Successfully connected')
})

const PORT = process.env.PORT || DEFAULT_PORT
const app = express()

app.use('/', homeRouter)

app.listen(PORT)
