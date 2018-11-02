const bluebird = require('bluebird')
const request = require('request')
const format = require('string-format')

const MCDONALDS_LOCATION_API_URL = 'https://www.mcdonalds.com/googleapps/GoogleRestaurantLocAction.do?method=searchLocation' +
					'&latitude={lat}&longitude={lng}&radius={radius}&maxResults={count}&language=en&country={region}'

class McDonaldsApi {

	constructor(region) {
		this.region = region

		if (this.region) {
			this.region = this.region.toLowerCase()
		}
	}

	getLocations(lat, lng, radius, count) {
		return new Promise((resolve, reject) => {
			if (!lat || !lng || !count) {
				reject({ error: 'Please include a latitude, longitude, and desired result count.' })
			}

			try {
				request({
					url: MCDONALDS_LOCATION_API_URL.format({ lat: lat, lng: lng, radius: radius, count: count, region: this.region }),
					method: 'GET'
				}, (err, httpRsp, body) => {
					if (err) {
						reject({ error: err })
					}

					var locs = JSON.parse(body).results
					if (!locs) {
						locs = JSON.parse(body).features
					}
					resolve({ locations: locs.splice(0, count) })
				});
			}
			catch(ex) {
				reject({ error: ex })
			}
		});
	}
}

format.extend(String.prototype, {})

module.exports = (region) => {
	return new McDonaldsApi(region)
}