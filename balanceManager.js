let balance = 0;

module.exports = {
	canAfford: function(amount) {
		return amount <= balance;
	},

	decreaseBalance: function(amount) {
		if (!this.canAfford(amount)) {
			throw new Error('Insufficient balance');
		}
		balance -= amount;
	},

	isValidAmount: function(amount) {
		return !!amount;
	},

	getBalance: () => balance,

	increaseBalance: function(amount) {
		balance += amount;
	},
};