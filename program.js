const Fs = require('fs');
const Hapi = require('hapi');
const Path = require('path');
const Rot13 = require('rot13-transform');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

(async () => {
	try {
		server.route({
			path: '/',
			method: 'GET',
			handler: (request, response) => {
				const thisFile = Fs.createReadStream(Path.join(__dirname, 'input.txt'));
				return thisFile.pipe(Rot13());
			}
		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

