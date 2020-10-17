const normalizingStateShapeOf = (data) => {
  const entries = data.reduce((obj, v) => {
    obj[v.seq] = v;
    return obj;
  }, {});
  const ids = data.map((v) => v.seq);
  return { entries, ids };
};
