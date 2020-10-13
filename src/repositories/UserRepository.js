import Repository from './Repository';

export default class UserRepository extends Repository {
  findByEmail(email) {
    const { entries, ids } = this.findAll();
    return ids.find((seq) => entries[seq].email === email);
  }

  findByEmailAndPassword({ email, password }) {
    const { entries, ids } = this.findAll();
    return ids.find((seq) => entries[seq].email === email && entries[seq].password === password);
  }
}
