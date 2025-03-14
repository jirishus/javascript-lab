
var Stack = function() {
  this.queue1 = [];
  this.queue2 = [];
}

Stack.prototype.push = function(x) {
  this.queue2.push(x);
  // move all elements from queue1 to queue2
  while (this.queue1.length > 0) {
    this.queue2.push(this.queue1.shift());
  }
  // swap queue1 and queue2
  const temp = this.queue1;
  this.queue1 = this.queue2;
  this.queue2 = temp;
}

Stack.prototype.pop = function() {
  if (this.queue1.length === 0) {
    return null;
  }
  return this.queue1.shift();
}

// usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());