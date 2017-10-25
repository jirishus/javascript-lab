function LL() {
	this.head = null;
}

LL.prototype.add = function(info) {
	var node = {
  	data: info,
    next: null
  }
  var pointer = null;
  
  if (!this.head) {
  	this.head = node;
  } else {
  	pointer = this.head;
    
    while (pointer.next) {
    	pointer = pointer.next;
    }    
    pointer.next = node;
  }  
}

var ll = new LL();
ll.add(15);
ll.add(24);
ll.add(345);
ll.add(45);
