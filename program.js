let myModule = require('./module');

myModule(process.argv[2], process.argv[3], (err, list) => {console.log(list)});
