let store = {}

module.exports = {
	setStore: value => {
		store = structuredClone(value)
	},

	getStore: () => {
		return store
	}
}
