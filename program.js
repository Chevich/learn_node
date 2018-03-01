const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
	if (err) {
		return console.log(err);
	}
	
	list.forEach((fileName) => {
		if (path.extname(fileName) === `.${process.argv[3]}`) {
			console.log(fileName);
		}
	});
});
