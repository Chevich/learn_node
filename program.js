let http = require('http');
let bl = require('bl');

http.get(process.argv[2], function(res) {
	res.pipe(bl((err, data) => {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
}).on('error', console.error);