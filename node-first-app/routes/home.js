const { Router } = require('express')
const UserModel = require('../models/UserModel')

const router = Router()

// const USERS = UserModel.find((err, users) => {
// 	if (err) {
// 		console.error('[MongoDB]: Error in routes/home')
// 		throw err
// 	}

// 	return users
// })

// console.log(USERS)

router.get('/', (request, response) => {
	UserModel.find((err, users) => {
		if (err) {
			response.send(err)
		}

		console.log(users)

		response.json(users)
	})
})

// router.post('/', function (request, response) {
// 	response.send(USERS)
// })

module.exports = router
