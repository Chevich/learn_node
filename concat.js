const concat = require('concat-stream');
const http = require('http');
const fs = require('fs');
const through = require('through2');


function write(buffer, _, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done){
	done();
}

let upStream = through(write, end);

const server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(upStream).pipe(res);
	}
	else res.end('beep boop');
});
server.listen(process.argv[2]);

