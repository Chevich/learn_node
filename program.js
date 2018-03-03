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
						isGuest: Joi.boolean().required(),
						username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
						password: Joi.string().alphanum(),
						accessToken: Joi.string().alphanum()
					}).options({ allowUnknown: true }).without('password', 'accessToken')
				}

			}

		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

