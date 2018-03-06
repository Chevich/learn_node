const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

coins = {
	'p': 1,
	'n': 5,
	'd': 10,
	'q': 25
};

coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {
	insertCoin: function(coinType) {
		balanceManager.increaseBalance(changeHandler.getAmount(coinType));
	},
	vendProduct: function(productId) {
		const product = productInventory.getProduct(productId);
		balanceManager.decreaseBalance(product.price);
		return product;
	},
	releaseChange: function() {
		const currentBalance = balanceManager.getBalance();
		balanceManager.decreaseBalance(currentBalance);
		return changeHandler.convertToChange(currentBalance);
	},
	getProducts: function() {
		return productInventory.getProducts();
	},

};

