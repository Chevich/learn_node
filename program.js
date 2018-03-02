const http = require('http');

const server = http.createServer((request, response) => {
	if (request.method === 'POST'){
		let data = '';
		request.setEncoding('utf8');
		request.on("data", (chunk) => data += chunk);
		request.on('end', () => {
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.write(data.toUpperCase());
			response.end();
		});
	}
});

server.listen(process.argv[2]);

