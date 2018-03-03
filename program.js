const Hapi = require('hapi');
const Basic = require('hapi-auth-basic');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

const validate = (request, username, password, h) => {
	const result = username === 'hapi' && password === 'auth';
	return { isValid: result, credentials: { name: username } };
};

(async () => {
	try {
		await server.register(Basic);

		server.auth.strategy('simple', 'basic', { validate });
		server.auth.default('simple');

		server.route({
			path: '/',
			method: 'GET',
			handler: (request, reply) => {
				return reply.response({ message: 'welcome' });
			}
		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();


