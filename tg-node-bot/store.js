let store = {}

module.exports = {
	setStore: value => {
		store = structuredClone(value)
		console.log(store)
	},

	getStore: () => {
		return store
	}
}
