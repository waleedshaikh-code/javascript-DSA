class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) {
        this.queue.push(value); 
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0]
    }

    length() {
        return this.queue.length;
    }

    print() {
        console.log(this.queue.join(' -> '))
    }
}

(function test() {
    var queue = new Queue();

    queue.enqueue('Node1')
    queue.enqueue('Node2')
    queue.enqueue('Node3')
    queue.enqueue('Node4')

    queue.print()

    queue.dequeue()

    queue.print()

    console.log(queue.peek())
    console.log(queue.length())
})()