import constructor from "../modules/constructor";
const setDataToContext = (context, template, data) => {
  let res = [];
  console.log('good')
  if(Array.isArray(data)) {
    console.log('array')
    data.forEach((item, index) => {
      for (let keyData in item) {
        for (let key in context) {
          console.log(key, keyData)
          if(key === keyData) {
            context[key] = item[keyData]

          }
        }
      }
      res.push(constructor(context, template));
    })
  } else {
    for (let keyData in data) {
      for (let key in context) {
        console.log(key, keyData)
        if(key === keyData) {
          context[key] = data[keyData]
        }
      }
    }
    res.push(constructor(context, template));
  }
  
  res = res.filter(function(item) {
    return item !== "\n";
  }).map(function(item) {
    return item.replace(/\n/g,'');
  }).join('');
  return res;
}

export default setDataToContext;