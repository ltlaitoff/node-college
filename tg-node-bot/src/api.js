const API_LINK = 'https://russianwarship.rip/api/v1/statistics/latest'
const HEADERS = {
	Accept: 'application/json'
}
const ERR_MESSAGE = 'Fetch error'

module.exports = {
	getApiData: () => {
		return fetch(API_LINK, {
			headers: HEADERS
		})
			.then(data => data.json())
			.catch(e => {
				throw new Error(ERR_MESSAGE, e)
			})
	}
}
