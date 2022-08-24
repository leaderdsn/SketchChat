const clone = (countClone, data) => {
  let res = [];
  for (let i = 0; i < countClone; i++) {
    res.push(...data);
  }
  return res;
};

export default clone;
