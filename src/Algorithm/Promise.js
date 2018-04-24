
const PENDING =  'pending';
const FULFILLED =  'fulfilled';
const REJECTED =  'rejected';

function Promise(executor) {
	let status = PENDING;
	let result = null;

	let resolveList = [];
	let rejectList = [];
	
	let that = this;
	try {
		if (status !== PENDING) {
			return false;
		}
		setTimeout(function () {
			executor.call(
				that,
				(data) => {
					result = data;
					status = FULFILLED;
					resolveList.forEach(func => {
						func(result);
					});
				},
				(data) => {
					result = data;
					status = REJECTED;
					rejectList.forEach(func => {
						func(result);
					});
				});
		}, 0);
	} catch(e) {
		status = REJECTED;
		result = e;
	}

	this.then = function (onFulfilled, onRejected) {
		if (status === PENDING) {
			resolveList.push(onFulfilled);
			rejectList.push(onRejected);
		} else if (staus === FULFILLED) {
			onFulfilled(result);
		} else if (status === REJECTED) {
			onRejected(result);
		}

		return this;
	}

	this.catch = function () {

	}
}



new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve();
	}, 1000);
}).then(() => {
 console.log('我最后执行')
 console.log(this);
}, () => {

});