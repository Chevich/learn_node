const net = require('net');

const server = net.createServer((socket) => {
		let date = new Date;
		socket.write(`${date.getFullYear()}-${nullify(date.getMonth() + 1)}-${nullify(date.getDate())} ${nullify(date.getHours())}:${nullify(date.getMinutes())}\n`);
		socket.end();
	}
);

function nullify(value) {
	return (value < 10 ? '0' : '') + value.toString();
}

server.listen(process.argv[2]);

