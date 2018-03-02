const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
	routes: {
		files: {
			relativeTo: __dirname
		}
	}
});

(async () => {
	try {
		await server.register(Inert);

		server.route({
			path: '/',
			method: 'GET',
			handler: {
				file: 'index.html'
			}
		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

