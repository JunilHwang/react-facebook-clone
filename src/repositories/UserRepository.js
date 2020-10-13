import Repository from './Repository';

export default class UserRepository extends Repository {
  findByEmail(email) {
    const { entries, ids } = this.findAll();
    const userSeq = ids.find((seq) => entries[seq].email === email);
    return userSeq !== undefined ? entries[userSeq] : null;
  }

  findByEmailAndPassword({ email, password }) {
    const { entries, ids } = this.findAll();
    const userSeq = ids.find((seq) => entries[seq].email === email && entries[seq].password === password);
    return userSeq !== undefined ? entries[userSeq] : null;
  }
}
