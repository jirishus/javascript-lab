class MemoryDB {
  constructor() {
    this.store = new Map();
  }

  set(key, value) {
    this.store.set(key,value);
    return true;
  }

  get(key) {
    const value = this.store.get(key);
    return value !== undefined ? value : null;
  }

  delete(key) {
    const existed = this.store.has(key);
    this.store.delete(key);
    return existed;
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