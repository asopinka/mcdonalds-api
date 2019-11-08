const request = require('request')
const Promise = require('bluebird')
const format = require('string-format')

const MCDONALDS_LOCATION_API_URL = 'https://www.mcdonalds.com/googleapps/GoogleRestaurantLocAction.do?method=searchLocation' +
					'&latitude={lat}&longitude={lng}&radius={radius}&maxResults={count}&language=en&country={region}'

const MenuApi = require('./menu')

class McDonaldsApi {

	constructor(region) {
		this.region = region

		if (!this.region) {
			throw new Error('Please initialize with a region.')
		}

		if (this.region) {
			this.region = this.region.toLowerCase()
		}

		this.breakfast = new MenuApi(this.region, 'breakfast')
		this.beef = new MenuApi(this.region, 'beef')
		this.chicken = new MenuApi(this.region, 'chicken')
		this.sandwiches = new MenuApi(this.region, 'sandwiches')
		this.salads = new MenuApi(this.region, 'salads')
		this.sides = new MenuApi(this.region, 'sides')
		this.desserts = new MenuApi(this.region, 'desserts')
		this.beverages = new MenuApi(this.region, 'beverages')
		this.mccafe = new MenuApi(this.region, 'mccafe')
		this.valuePicks = new MenuApi(this.region, 'valuepicks')
		this.happyMeals = new MenuApi(this.region, 'happymeals')
		this.condiments = new MenuApi(this.region, 'condiments')
	}

	getLocations(lat, lng, radius, count) {
		return new Promise((resolve, reject) => {
			if (!lat || !lng || !radius || !count) {
				reject({ error: 'Please include a latitude, longitude, radius, and desired result count.' })
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
