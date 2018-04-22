import Shuffle from './Algorithm/Shuffle.js';
import Queue from './Algorithm/Queue.js';
import Debounce from './Algorithm/Debounce.js';
import Throttle from './Algorithm/Throttle.js';


var list = [1, 2, 3, 4, 5, 6];
console.log(Shuffle(list));


var queue = new Queue();
queue.enqueue('test1');
queue.enqueue('test2');
queue.enqueue('test3');
// console.log(queue);
// console.log(queue.front());
// console.log(queue.back());
queue.dequeue();
console.log(queue);
console.log(queue.front());
console.log(queue.back());
console.log(queue.size());
queue.clear();
console.log(queue);

let debounce = Debounce(() => {
    console.log('Debounce',  +new Date())
}, 100);

// debounce();

// debounce();

// debounce();

// debounce();

// debounce();

// setTimeout(() => {
//     debounce();
// }, 1000);

let throttle = Throttle(() => {
    console.log('throttle', +new Date())
}, 100);


throttle();

throttle();

throttle();

// setTimeout(() => {
//     throttle();
// }, 100);

setTimeout(() => {
    throttle();
}, 200);

setTimeout(() => {
    throttle();
}, 210);
