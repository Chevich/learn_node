const fs = require('fs');

let result = fs.readFile(process.argv[2], (error, buffer) => {
	if (error) {
		return console.log('Error=', error);
	}

	console.log(buffer.toString().split('\n').length - 1);
});
