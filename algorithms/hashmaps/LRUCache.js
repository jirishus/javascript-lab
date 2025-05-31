/*
Least Recently Used (LRU) Cache

An LRU cache is a data structure that stores a limited number of items and automatically removes the least recently used item when it reaches its capacity.

This is useful in situations where you want to keep frequently accessed data readily available while discarding older, less relevant data
*/

// LRUCache Constructor
const LRUCache = function(capacity) {
  /*
  This line initializes a Map to store the cache's data. A map is used because it maintains the INSERTION ORDER of its elements, which is crucial for identifying the least recently used item. It also provides efficient getting and setting of key-value pairs.
  */
  this.cache = new Map();
  /*
  This sets the maximum number of items that the cache can hold.
  */
  this.capacity = capacity;
}

// This method retrieves an item from the cache
LRUCache.prototype.get = function(key) {
  /*
  If the key doesn't exist in the cache,
  we return -1 (not found)
  */
  if (!this.cache.has(key)) return -1;

  let value = this.cache.get(key); // retrieve value of key
  /*
    This DELETE and SET operations are the CORE of the LRU logic.
    By re-adding the item, it gets moved to the "end" of the Map's insertion order, effectively marking it as the MOST RECENTLY USED item. This ensures that frequently accessed items stay in the cache, while items that are not accessed for a while will eventually be at the beginning of the map's insertion order and will be the first to be removed when the cache is full.
  */
  this.cache.delete(key); // key-value pair is DELETED from cache
  this.cache.set(key, value); // immediately after, we add same key-value pair

  return value;
}

