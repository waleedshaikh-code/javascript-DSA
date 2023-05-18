function Node(data) {
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        const node = new Node(data);

        const parent = toNodeData ? this.findBFS(toNodeData) : null;

        // var obj = {
        //     condition1: action
        // }
        // obj['condtion']()
       
        if(parent) {
            parent.children.push(node)
        } else {

            if(!this.root)
                this.root = node;
            else
                return "Tried to store node as root when root already exists."
        }
    }

    findBFS(data) {
        const queue = [this.root];
        let _node = null;


        this.traverseBFS((node) => {

            if(node.data === data) {
                _node = node;
            }
        })

        return _node;
    }

    traverseBFS(cb) {
        const queue = [this.root];

        if(cb)
            while(queue.length) {

                const node = queue.shift();

                cb(node)

                    for(const child of node.children) {
                    queue.push(child);
                }
            }
    }
}

(function test() {
    let tree = new Tree()


    tree.add('Node1')
    tree.add('Node2', 'Node1')
    tree.add('Node3', 'Node1')

    console.log(tree.findBFS('Node1'))

    // tree.traverseBFS((node) => {console.log(node)})
})()