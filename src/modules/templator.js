class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(this._template, ctx);
  }

  get(obj, path, defaultValue) {
    const keys = path.split('.');
  
    let result = obj;
    for (let key of keys) {
      result = result[key];

      if (result === undefined) {
        // console.log(result[key])
        // delete result[key]
        return defaultValue;        
      }
    }
  
    return result ?? defaultValue;
  } 

  _compileTemplate(template, ctx) {
    let tmpl = this._template;
    let key = null;
    const regExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = this.get(ctx, tmplValue, '');

        if (typeof data === "function") {
          window[tmplValue] = data;
          tmpl = tmpl.replace(
            new RegExp(key[0], "gi"),
            `window.${key[1].trim()}()`
          );
          continue;
        } 

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }

    return tmpl;
  }
}

export default Templator;

window.Templator = Templator;