const Hapi = require('hapi');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({
	path: '/{name}',
	method: 'GET',
	handler: (request, h) => `Hello ${encodeURIComponent(request.params.name)} `
});


(async () => {
	try {
		await server.start();

		console.log(`Server running at: ${server.info.uri}`);
	} catch (error) {
		console.log(error);
	}
})();
