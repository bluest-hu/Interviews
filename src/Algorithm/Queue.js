class Queue {
    constructor() {
        this.list = {};
        this.tail = 0;
        this.head = 0;
    }

    front() {
        return this.list[this.head] || null;
    }

    back() {
        return this.list[this.tail -1] || null;
    }

    isEmpty() {
        return this.getsize() >= 0;
    }

    clear() {
        this.list = {};
        this.tail = 0;
        this.head = 0;
    }

    has(item) {
    }

    size() {
        return this.tail - this.head;
    }

    dequeue() {
        delete this.list[this.head]
        this.head++;
    }

    enqueue(item) {
        this.list[this.tail] = item;
        this.tail++;
    }
};

export default Queue;
