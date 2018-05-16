/**
 * Represents a LinkedList
 * @constructor
 */
function LinkedList() {
 this.head = null;
}

/**
 * Represents a Node
 * @constructor
 * @param {object} data - The data to be stored in Node.
 */
function Node(data) {
 this.data = data;
 this.next = null;
}

/**
 * Method to add Nodes to LinkedList
 * @prototype
 * @param {Node} - The new Node to be inserted into the LinkedList
 */
LinkedList.prototype.add = function(node) {
 // first check if linkedList head is null, if so add first node.
 return 'Not Implemented';
}

// Create inkedList Object
let list = new LinkedList();

// Create Node Object
let node10 = new Node('mockdata');

// Add Node Object to LinkedList
list.add(node10);
