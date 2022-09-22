const { emoji, translateOutput, APIKeys } = require('../config')

const getMessageTextByType = (type, { stats, increase }) => {
	if (!Object.values(APIKeys).includes(type)) return 'Not found'

	return `${emoji[type]}${translateOutput[type].ua}: ${stats[type]}(+${increase[type]})`
}

module.exports = { getMessageTextByType }
