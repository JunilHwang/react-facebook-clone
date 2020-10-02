export default Object.freeze({
  get(key) {
    return JSON.stringify(localStorage.getItem(key)) || null;
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
});
