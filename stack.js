function Stack() {
 this.size = 0;
 this.top = null;
}

function Node(data) {
 this.data = data;
 this.next = null;
}

// mock browser history using Stack
var browser = new Stack();

console.log(browser);