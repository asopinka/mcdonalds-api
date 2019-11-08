const request = require('request')
const Promise = require('bluebird')
const format = require('string-format')

const IMAGE_PREFIX = {
	'ca': 'https://www.mcdonalds.com/is/image/content/dam/ca/web/nutrition/items/thumbnail/square/{file}?$THUMBNAIL_LARGE$',
	'us': `https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/{file}?$THUMBNAIL_LARGE$`
}

const MENU = {
	'breakfast': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100001.true.true..false.json',
		'us': ''
	},
	'beef': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100005.true.true..false.json',
		'us': ''
	},
	'chicken': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100007.true.true..false.json',
		'us': ''
	},
	'sandwiches': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100014.true.true..false.json',
		'us': ''
	},
	'salads': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100004.true.true..false.json',
		'us': ''
	},
	'sides': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100006.true.true..false.json',
		'us': ''
	},
	'desserts': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100003.true.true..false.json',
		'us': ''
	},
	'beverages': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100000.true.true..false.json',
		'us': ''
	},
	'mccafe': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100008.true.true..false.json',
		'us': ''
	},
	'valuepicks': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100015.true.true..false.json',
		'us': ''
	},
	'happymeals': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100009.true.true..false.json',
		'us': ''
	},
	'condiments': {
		'ca': 'https://www.mcdonalds.com/services/mcd/categoryDetails.ca.en-ca.100002.true.true..false.json',
		'us': ''
	}
}

class Menu {
	constructor(region, category) {
		this.region = region
		this.category = category
	}
	
	items() {
		this.regionCheck()

		return new Promise((resolve, reject) => {
			try {
				request({
					url: MENU[this.category][this.region],
					method: 'GET'
				}, (err, httpRsp, body) => {
					if (err) {
						reject({ error: err })
					}

					body = JSON.parse(body)

					const returnObj = {}
					returnObj.category = body.category.marketingName
					returnObj.description = body.category.description
					returnObj.items = body.category.items.map(item => {
						return {
							id: item.id,
							name: item.marketingName,
							image: IMAGE_PREFIX[this.region].format({ file: item.imagePath }),
							url: `https://www.mcdonalds.com${item.path}`
						}
					})

					resolve(returnObj)
				})
			}
			catch(err) {
				reject({ error: err })
			}
		})
	}

	regionCheck() {
		if (this.region !== 'us' && this.region !== 'ca') {
			throw new Error('Cannot get menu items for this region')
		}
	}
}

format.extend(String.prototype, {})

module.exports = Menu
