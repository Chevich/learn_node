const concat = require('concat-stream');
// const http = require('http');
//
// const server = http.createServer(function (req, res) {
// 	if (req.method === 'POST') {
// 		req.pipe(concat(function (body) {
// 			const obj = JSON.parse(body);
// 			res.end(Object.keys(obj).join('\n'));
// 		}));
// 	}
// 	else res.end();
// });
// server.listen(5000);

function concatFunc(src){
	console.log(src.toString().split('').reverse().join(''));
}

process.stdin.pipe(concat(concatFunc));
