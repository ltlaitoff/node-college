require('dotenv').config()
const { Telegraf } = require('telegraf')
const { setStore, getStore } = require('./store')
const { getApiData } = require('./api')
const { getMessageTextByType, checkOnTrigger } = require('./helpers')

const bot = new Telegraf(process.env.BOT_TOKEN)

const mount = () => {
	return getApiData()
		.then(value => {
			setStore(value)
		})
		.catch(err => {
			throw new Error('API error', err)
		})
}

bot.start(ctx => ctx.reply('Hi'))
bot.help(ctx => ctx.reply('Help is not working'))

bot.hears(
	(userMessage, ctx) => {
		const loweredUserMessage = userMessage.toLocaleLowerCase()

		const checkMessageResult = checkOnTrigger(loweredUserMessage)

		if (checkMessageResult == null) return false

		ctx.state.type = checkMessageResult

		return true
	},
	ctx => {
		const store = getStore()

		const stats = store?.data?.stats
		const increase = store?.data?.increase

		if (!stats || !increase) return

		ctx.reply(
			getMessageTextByType(ctx.state.type, {
				stats,
				increase
			})
		)
	}
)

mount().then(() => bot.launch())

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
