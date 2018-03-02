const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

(async () => {
	try {
		server.route({
			path: '/chickens/{breed?}',
			method: 'GET',
			handler: (request, h) => `Hello ${encodeURIComponent(request.params.breed)} `,
			config: {
				validate: {
					params: {
						breed: Joi.string().required()
					}
				}
			}

		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

