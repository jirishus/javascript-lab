class MemoryDB {
  constructor() {
    this.store = new Map();
  }

  set(key, value) {
    this.store.set(key,value);
    return true;
  }

  get(key) {
    return this.store.get(key) ? this.store.get(key) : null;
  }

  delete(key) {
    return this.store.delete(key);
  }

  // has method to check if
  // a key exists without retrieving it
  has(key) {
    return this.store.has(key);
  }

  clear() {
    this.store.clear();
  }

  size() {
    this.store.size;
  }
}

// Driver Code

// Initialize a new in-memory store
let db = new MemoryDB();