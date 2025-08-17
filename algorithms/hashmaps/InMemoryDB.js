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
}

// Driver Code

// Initialize a new in-memory store
let db = new MemoryDB();