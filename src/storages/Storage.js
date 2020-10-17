export default class Storage {
  storage;
  constructor(storage) {
    this.storage = storage;
  }

  get(key, defaultValue = null) {
    return JSON.parse(this.storage.getItem(key)) || defaultValue;
  }

  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    this.storage.removeItem(key);
  }
}
