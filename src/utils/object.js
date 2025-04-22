const getKeyByValue = (obj, value) => {
  const entry = Object.entries(obj).find(([_, v]) => v === value);
  return entry ? entry[0] : null;
};

export { getKeyByValue };
