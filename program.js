const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

(async () => {
	try {
		server.route({
			path: '/login',
			method: 'POST',
			handler: (request, h) => 'login successful',
			config: {
				validate: {
					payload: Joi.object({
						isGuest: Joi.boolean(),
						username: Joi.string(),
						accessToken: Joi.string().alphanum(),
						password: Joi.string().alphanum(),
					})
						.with('isGuest', 'username')
						.without('password', 'accessToken')
				}
			}

		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

