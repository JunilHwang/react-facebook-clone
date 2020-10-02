export default Object.freeze({
  get(key, defaultValue = null) {
    return JSON.stringify(localStorage.getItem(key)) || defaultValue;
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
});
