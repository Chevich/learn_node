const Hapi = require('hapi');

const server = Hapi.Server({
	host: 'localhost',
	port: Number(process.argv[2] || 8080),
});

(async () => {
	try {
		server.route({
			path: '/upload',
			method: 'POST',
			handler: (request, h) => {
				return new Promise((resolve, reject) => {
					let body = '';

					request.payload.file.on('data', (data) => {
						body += data
					});

					request.payload.file.on('end', () => {
						let result = {
							description: request.payload.description,
							file: {
								data: body,
								filename: request.payload.file.hapi.filename,
								headers: request.payload.file.hapi.headers,
							}
						};

						return resolve(JSON.stringify(result));
					});
				});
			},
			config: {
				payload: {
					output: 'stream',
					parse: true,
					allow: 'multipart/form-data'
				}
			}
		});

		await server.start();

	} catch (error) {
		console.log(error);
	}
})();

