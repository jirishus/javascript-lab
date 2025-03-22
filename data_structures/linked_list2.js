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
 let pointer = null; // init pointer
 // first check if linkedList head is null, if so add first node.
 if (!this.head) {
  this.head = node;
 } else {
  pointer = this.head;
  while (pointer.next) {
    pointer = pointer.next
  }
  pointer.next = node;
 }
}

LinkedList.prototype.reverse = function(head) {
  if (head === null) { return head; }
  // init pointers
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next; // save next
    // advance prev / next
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Create inkedList Object
let list = new LinkedList();

// Create Node Object
let f1 = new Node('fallout1');
let f2 = new Node('fallout2');
let f3 = new Node('fallout3');

// Add Node Object to LinkedList
list.add(f1);
list.add(f2);
list.add(f3);

console.log(list);

const r = list.reverse(list.head);

console.log(r);