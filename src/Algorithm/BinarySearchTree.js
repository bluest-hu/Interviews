class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const insertNode = (node, newNode) => {
		if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}

const inOrderTraverse = (node, callback) => {
    if (node !== null) {
        inOrderTraverse(node.left, callback);
        callback(node.key);
        inOrderTraverse(node.right, callback);
    }
}

const preOrderTraverse = (node, callback) => {
    if (node !== null) {
        callback(node.key);        
        preOrderTraverse(node.left, callback);
        preOrderTraverse(node.right, callback);
    }
}

const postOrderTraverse = (node, callback) => {
    if (node !== null) {
        postOrderTraverse(node.left, callback);
        postOrderTraverse(node.right, callback);
        callback(node.key);
    }
}


const minNode = (node) => {
    if (node) {
        while(node && node.left !== null) {
            node = node.left;
        }

        return node.key;
    }
     return null;
}

const maxNode = (node) => {
    if (node) {
        while(node && node.right !== null) {
            node = node.right;
        }

        return node.key;
    }
    return null;
}

class BinarySearchTree {
    constructor() {
       this.root = null;
    }

    insert(key) {
        const newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode);
        }
    }

    search(key) {
    }

    inOrderTraverse(callback) {
        inOrderTraverse(this.root, callback);
    }

    preOrderTraverse(callback) {
        preOrderTraverse(this.root, callback);
    }

    postOrderTraverse(callback) {
        postOrderTraverse(this.root, callback)
    }

    min() {
        return minNode(this.root);
    }

    max() {
        return maxNode(this.root);
    }

    remove(key) {

    }
}

export default BinarySearchTree;
