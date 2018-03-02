const http = require('http');
const url = require('url');

const map = require('through2-map');

const server = http.createServer((request, response) => {
	if (request.method !== 'GET') {
		response.writeHead(404, { 'Content-Type': 'application/json' });
		response.end();
	}
	let s = url.parse(request.url, true);
	let obj = {};

	if (s.pathname === '/api/parsetime') {
		let data = new Date(s.query.iso);
		obj = {
			hour: data.getHours(),
			minute: data.getMinutes(),
			second: data.getSeconds()
		};
	} else {
		let data = new Date(s.query.iso);
		obj = {
			unixtime: data.getTime()
		};
	}
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(obj));
});

server.listen(process.argv[2]);

