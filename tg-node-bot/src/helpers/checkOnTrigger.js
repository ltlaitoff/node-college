const { triggers } = require('../config')

const checkOnTrigger = message => {
	for ([key, value] of Object.entries(triggers)) {
		for (element of value) {
			if (message.includes(element)) {
				return key
			}
		}
	}

	return null
}

module.exports = checkOnTrigger
