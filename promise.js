'use strict';

// Создаётся объект promise
let delay = (seconds) => {
		return new Promise((resolve, reject) => {
				console.log('Promise start');
				setTimeout(() => {
					// переведёт промис в состояние fulfilled с результатом "result"
					// resolve("Success");
					reject(new Error("result"));
				}, seconds);
			}
		)
	}
;

// promise.then навешивает обработчики на успешный результат или ошибку
delay(10000)
	.then(
		result => {
			// первая функция-обработчик - запустится при вызове resolve
			console.log("Fulfilled: " + result); // result - аргумент resolve
		},
		error => {
			// вторая функция - запустится при вызове reject
			console.log("Rejected: " + error.message); // error - аргумент reject
		}
	);