import { repository } from '../storages';

export default class Repository {
  #key;

  constructor(key) {
    this.#key = key;
  }

  saveAll(allData) {
    repository.set(this.#key, allData);
  }

  findAll() {
    return repository.get(this.#key, {
      entries: [],
      ids: [],
    });
  }

  upsert(data) {
    if (!data) return;
    const method = data.seq === undefined ? 'add' : 'update';
    this[method](data);
  }

  add(data) {
    const allData = this.findAll();
    const seq = Math.max(...allData.ids) + 1;
    allData.entries[seq] = data;
    allData.ids.push(seq);
    this.saveAll(allData);
  }

  update(data) {
    const allData = this.findAll();
    allData.entries[data.seq] = data;
    this.saveAll(allData);
  }
}
