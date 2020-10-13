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
      entries: {},
      ids: [],
    });
  }

  add(data) {
    const allData = this.findAll();
    const seq = Math.max(0, ...allData.ids) + 1;
    allData.entries[seq] = { ...data, seq };
    allData.ids.push(seq);
    this.saveAll(allData);
  }

  update(data) {
    const allData = this.findAll();
    allData.entries[data.seq] = data;
    this.saveAll(allData);
  }
}
