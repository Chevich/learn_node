const combine = require('stream-combiner');
const split = require('split');
const through = require('through2').obj;
const zlib = require('zlib');

module.exports = function() {
	let current;

	function write (line, _, next) {
		if (line.length === 0) return next();
		const row = JSON.parse(line);

		if (row.type === 'genre') {
			if (current) {
				this.push(JSON.stringify(current) + '\n');
			}
			current = { name: row.name, books: [] };
		}
		else if (row.type === 'book') {
			current.books.push(row.name);
		}
		next();
	}
	function end (next) {
		if (current) {
			this.push(JSON.stringify(current) + '\n');
		}
		next();
	}


	return combine(
		split(),
		through(write, end),
		zlib.createGzip()
	)
};
