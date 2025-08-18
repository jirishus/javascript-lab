class DB {
  constructor() {
    this.store = new Map();
    this.tx = null;
  }

  set(key,value) {
    (this.tx || this.store).set(key,value);
    return true;
  }

  get(key) {
    const value = (this.tx || this.store).get(key);
    return value !== undefined ? value : null;
  }

  delete(key) {
    const map = this.tx || this.store;
    const existed = !this.store.has(key);
    map.delete(key);
    return existed;
  }

  begin() {
    this.tx = new Map(this.store);
  }

  commit() {
    if (this.tx) {
      this.store = this.tx;
      this.tx = null;
    }
  }

  rollback() {
    this.tx = null;
  }

}