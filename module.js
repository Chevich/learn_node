const fs = require('fs');
const path = require('path');

module.exports = function newFunction(dirName, ext, callback) {
	fs.readdir(dirName, (err, list) => {
		if (err) {
			return callback(err);
		}

		list.forEach((fileName) => {
			if (path.extname(fileName) === `.${ext}`) {
				callback(null, fileName);
			}
		});
	});
};