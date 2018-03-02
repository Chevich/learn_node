const Path = require('path');
const Hapi = require('hapi');
const Handlebars = require('handlebars');
const Vision = require('vision');


const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

(async () => {
	try {
		await server.register(Vision);

		server.route({
			path: '/',
			method: 'GET',
			handler: {
				view: 'index.html'
			}
		});

		server.views({
			engines: {
				html: Handlebars
			},
			path: Path.join(__dirname, 'templates')
		});


		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

