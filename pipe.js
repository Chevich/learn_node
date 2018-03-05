const through = require('through2');
const split = require('split');

let number = 1;


function write(buffer, _, next) {
	this.push((number  % 2 ? buffer.toString().toLowerCase() : buffer.toString().toUpperCase()) +'\n');
	number++;
	next();
}

function end(done) {
	done();
}

let stream = through(write, end);

// process.stdin.pipe(split()).pipe(process.stdout);
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
