console.log('main1');
setTimeout(() => console.log('st1'), 0);
Promise.resolve()
	.then(() => console.log('p'))
	.then(() => {
		setTimeout(() => {
			Promise.resolve().then(() => console.log('uhhh'));
		}, 0);
	});
setTimeout(() => console.log('st2'), 0);
console.log('main2');