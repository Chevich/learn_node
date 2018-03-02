let http = require('http');
let bl = require('bl');

let commonData = [];
let count = 0;

for (let i=2; i < process.argv.length; ++i) {
	http.get(process.argv[i], function(res) {
		res.pipe(bl((err, data) => {
			commonData[i - 2] = data.toString();
			count += 1;
			if (count === 3) {
				commonData.forEach((element) => console.log(element));
			}
		}));
	}).on('error', console.error);
}


