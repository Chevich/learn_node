const Hapi = require('hapi');
const Boom = require('boom');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

(async () => {
	try {
		server.state('session', {
			path: '/',
			encoding: 'base64json',
			ttl: 10,
			domain: 'localhost',
			isSameSite: false,
			isSecure: false,
			isHttpOnly: false
		});


		server.route({
			path: '/set-cookie',
			method: 'GET',
			handler: (request, reply) => reply.response({message : 'success'}).state('session', {key : 'makemehapi'}),
			config: {
				state: {
					parse: true,
					failAction: 'log'
				}
			}
		});

		server.route({
			path: '/check-cookie',
			method: 'GET',
			handler: (request, h) => {
				const cookie = request.state.session;
				let result = null;

				if (cookie) {
					console.log('cookie = ', cookie);
					result = {user : 'hapi'}
				} else {
					result = Boom.unauthorized('Missing authentication')

				}
				return result;
			},
		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

