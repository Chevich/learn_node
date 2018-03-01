const fs = require('fs');
const path = require('path');

module.exports = function newFunction(dirName, ext, callback) {
	fs.readdir(dirName, (err, data) => {
		if (err) {
			return callback(err);
		}

		callback(null, data.filter((fileName) => path.extname(fileName) === `.${ext}`));
	});
};