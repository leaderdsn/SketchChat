import constructor from "../modules/constructor";
const setDataToContext = (context, template, data) => {
  let res = [];
  try {
    data.forEach((item) => {
      for (let keyData in item) {
        for (let key in context) {
          if (key === keyData) {
            context[key] = item[keyData];
          }
        }
      }
      res.push(constructor(context, template));
    });
    res = res
      .filter(function (item) {
        return item !== "\n";
      })
      .map(function (item) {
        return item.replace(/\n/g, "");
      })
      .join("");
    return res;
  } catch(e) {
    if (e.name === 'TypeError') {
      throw new Error("Ошибка типа данных, data не массив!")
    }
  }
};

export default setDataToContext;