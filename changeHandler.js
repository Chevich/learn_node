const coins = {
	'p': 1,
	'n': 5,
	'd': 10,
	'q': 25
};

const coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {

	getAmount: function(coinType) {
		if (!coins.hasOwnProperty(coinType)) {
			throw new Error('Unrecognized coin ' + coinType);
		}
		return coins[coinType];
	},

	convertToChange: function(amount) {
		let change = [];
		for (let i in coinsByAmount) {
			let coinType = coinsByAmount[i];
			let coinValue = coins[coinType];

			while (amount >= coinValue) {
				change.push(coinType);
				amount -= coinValue;
			}
		}
		return change;
	}

};