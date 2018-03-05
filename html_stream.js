const trumpet = require('trumpet');
const tr = trumpet();
const through = require('through2');

const stream = tr.select('.loud').createStream();

stream.pipe(through(function(buffer, _, next){
	this.push(buffer.toString().toUpperCase());
	next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
