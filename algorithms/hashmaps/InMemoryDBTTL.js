class MemoryDB {
  constructor() {
    this.store = new Map();
    this.expirations = new Map();
  }

  set(key, value, ttl = null) {
    this.store.set(key,value);

    /**
     * We check whether a TTL value is provided
     * if a TTL is provided, it means we want this key to expire in the future
     */
    if (ttl !== null) {
      // We get the current time in milliseconds (Date.now()) and add our TTL (e.g. 1000 = 1 second)
      // expireAt is now a timestamp indicating when this key becomes invalid
      const expireAt = Date.now() + ttl;

      // we store the expireAt timestamp in a separate Map (this.expirations) using the same key
      // later when we get(key), we can check if the current time is past the expireAt time
      this.expirations.set(key, expireAt);
    } else {

      // if no TTL was provided, this removes any existing expiration entry for that key.
      // This ensures the key will live forever unless manually deleted.
      this.expirations.delete(key);
    }

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