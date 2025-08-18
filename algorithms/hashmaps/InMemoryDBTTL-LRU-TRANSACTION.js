class MemoryDB {
  constructor(maxSize = 100) {
    this.store = new Map();
    this.expirations = new Map();
    this.maxSize = maxSize;
    this.tx = null;
  }

  set(key, value, ttl = null) {
    const store = this.tx?.store || this.store;
    const expirations = this.tx?.expirations || this.expirations;
    
    if (store.has(key)) {
      store.delete(key); // remove to re-insert at the end
    }
    store.set(key, value);
    
    // Handle TTL
    if (ttl !== null) {
      let expireAt = Date.now() + ttl;
      expirations.set(key, expireAt);
    } else {
      expirations.delete(key);
    }
    
    // Enforce LRU eviction
    if (store.size > this.maxSize) {
      const oldestKey = store.keys().next().value;
      this.delete(oldestKey);
    }
    
    return true;
  }

  get(key) {
    const store = this.tx?.store || this.store;
    const expirations = this.tx?.expirations || this.expirations;
    
    const expireAt = expirations.get(key);
    if (expireAt && Date.now() > expireAt) {
      this.delete(key);
      return null;
    }
    
    if (!store.has(key)) return null;
    
    // Mark as recently used by reinserting it
    const value = store.get(key);
    store.delete(key);
    store.set(key, value);
    return value;
  }

  delete(key) {
    const store = this.tx?.store || this.store;
    const expirations = this.tx?.expirations || this.expirations;
    
    expirations.delete(key);
    return store.delete(key);
  }

  begin() {
    this.tx = {
      store: new Map(this.store),
      expirations: new Map(this.expirations)
    };
  }

  commit() {
    if (this.tx) {
      this.store = this.tx.store;
      this.expirations = this.tx.expirations;
      this.tx = null;
    }
  }

  rollback() {
    this.tx = null;
  }
}

// Initialize a new in-memory store
let db = new MemoryDB();