let sum = 0;

process.argv.forEach((element, i) => {
	if (i>1) {
		sum += +element
	}
});

console.log(sum);