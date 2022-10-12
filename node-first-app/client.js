const http = require('http')

const server = http.createServer((request, response) => {
	if (request.url == '/') {
		response.writeHead(200, {
			'Content-Type': 'text/html',
		})

		response.end('<h1>Hello</h1>')
	}

	if (request.url === '/users') {
		response.writeHead(200, {
			'Content-Type': 'text/json',
		})

		const users = [
			{
				name: 'Masha',
				age: 19,
			},
			{
				name: " 'Andrii",
				age: 20,
			},
		]

		response.end(JSON.stringify(users))
	}
})

server.listen(3000, () => {
	console.log('Server runing...')
})
