class MemoryDB {
  constructor(maxSize = 100) {
    this.store = new Map();
    this.expirations = new Map();
    this.maxSize = maxSize;
  }

  set(key, value, ttl = null) {
    if (this.store.has(key)) {
      this.store.delete(key); // remove to re-insert at the end
    }
    this.store.set(key, value);

    // Handle TTL
    if (ttl !== null) {
      let expireAt = Date.now() + ttl;
      this.expirations.set(key, expireAt);
    } else {
      this.expirations.delete(ttl);
    }

    // Enforce LRU eviction
    if (this.store.size > this.maxSize) {
      const oldestKey = this.store.keys().next().value;
      this.delete(oldestKey);
    }
  }

  get(key) {
    const expireAt = this.expirations.get(key);
    if (expireAt && Date.now() > expireAt) {
      this.delete(key);
      return null;
    }

    if (!this.store.has(key)) return null;

    // Mark as recently used by reinserting it
    const value = this.store.get(key);
    this.store.delete(key);
    this.store.set

    return value;
  }

  delete(key) {
    this.expirations.delete(key);
    return this.store.delete(key);
  }
}