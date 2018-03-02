let http = require('http');

http.get(process.argv[2], function(res) {
	let data = '';
	res.setEncoding('utf8');
	res.on("data", (answer) => data += answer);
	res.on('end', () => {
		console.log(data.length);
		console.log(data);
	});
	res.on('error', console.error);
}).on('error', console.error);