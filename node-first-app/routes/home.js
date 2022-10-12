const { Router } = require('express')
const router = Router()

const USERS = [
	{
		name: 'Masha',
		age: 19,
	},
	{
		name: " 'Andrii",
		age: 20,
	},
]

router.get('/', function (request, response) {
	response.json(USERS)
})

router.post('/', function (request, response) {
	response.send(USERS)
})

module.exports = router
