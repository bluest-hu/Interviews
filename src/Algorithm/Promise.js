
const PENDING =  'pending';
const FULFILLED =  'fulfilled';
const REJECTED =  'rejected';

function Promise(executor) {
	let status = PENDING;
	let value = undefined;
	let reson = undefined; 

	let resolveList = [];
	let rejectList = [];
	
	let that = this;

	function resolve(value) {
		if (value instanceof Promise) {
			return value.then(resolve, reject);
		}
		value = value;
	}

	function reject(value) {
		if (value instanceof Promise) {
				return false;	
		}

		setTimeout(() => {
			if (that.status === PENDING) {
				that.status = FULFILLED;
				that.value = value;
				that.resolveList.forEach(cb => cb(that)(that.value));
			}	
		})
	}

	function reject(reson) {
		setTimeout(() => {
				if (that.staus === PENDING) {
					that.status = REJECTED;
					that.reason = reason;
					that.rejectList.forEach(cb => cb(that)(that.reson))
				}
		});
	}

	try {
		executor(resolve, reject);
	} catch(e) {
		reject(e);
	}

	/**
	 * 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)
	 * 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
	 * 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
	 * 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因
	 * @param {*} onFulfilled 
	 * @param {*} onRejected 
	 */
	this.then = function (onFulfilled, onRejected) {
		if (status === PENDING) {
			resolveList.push(onFulfilled);
			rejectList.push(onRejected);
		} else if (staus === FULFILLED) {
			onFulfilled(value);
		} else if (status === REJECTED) {
			onRejected(value);
		}
		return this;
	}

	this.catch = function () {
	}
}

function resolvePromise(promise2, x, resolve, reject) {

}

Promise.all = function () {
}

Promise.trace = function () {
}

Promise.reject = function () {
}

Promise.resolve = function () {	
}

export default Promise;
