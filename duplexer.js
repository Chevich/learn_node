const spawn = require('child_process').spawn;
const dup = require('duplexer2');

module.exports = function (cmd, args) {
	// spawn the process and return a single stream
	// joining together the stdin and stdout here
	const child = spawn(cmd, args);

	return dup(child.stdin, child.stdout);
};
