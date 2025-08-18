class MemoryDB {
  constructor() {
    /**
     * 
     * We use two separate maps to maintain
     * 
     * 1. Separation of Concerns
     * 
     * Each map is single-purpose:
     *  - One only handles values
     *  - The other only tracks TTL metadata
     * 
     * This design keeps the logic more simple and easier to test and evolve
     * 
     * 2. Faster Lookups
     * 
     *  When we call get(key), each lookup is O(1) with a Map
     *  By keeping them separate, we don't need to parse or unwrap a complex object to find the TTL
     * 
     * 3. Simpler Mutation Logic
     * 
     * If we stored both value and TTL in one Map
     * (this.store.set("key", { value: 'abc}, expireAt: 12345 ))
     * Then every time you do a get,set, or delete, you'd have to destructure or update both properties carefully
     * 
     * 4. Optional TTL
     *  Not every key will have a TTL
     * 
     *  With one map, we'd have to store { value, expireAt: null }, which is wasted space and complexity
     * 
     * 5. Easier to Extend or Refactor Later
     * 
     *  Makes it easier to:
     *    - Add background TTL cleanup
     *    - Implement eviction policies (like LRU)
     *    - Serialzie / deserialize TTL and value layers independently
     *    - Move on to Redis or a file and the other to memory, if needed
     */

    // Map of actual key-value pairs
    this.store = new Map();
    // Map of Key -> expireAt timestamps
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
    const expireAt = this.expirations.get(key);
    const value = this.store.get(key);
    if (expireAt && Date.now() > expireAt) {
      // Here, we use LAZY EXPIRATION, meaning expired key are ONLY cleaned up when accessed
      // this.store.delete(key);
      // this.expirations.delete(key);
      this.delete(key);
      return null;
    }

    return value !== undefined ? value : null;
  }

  delete(key) {
    const existed = !this.store.get(key);
    this.expirations.delete(key);
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