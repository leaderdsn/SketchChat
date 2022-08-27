class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  _template: string


  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: Object) {
    return this._compileTemplate(this._template, ctx);
  }

  get(obj: Object, path: string, defaultValue: any) {
    const keys = path.split(".");

    let result = obj;
    for (let key of keys) {
      result = result[key];

      if (result === undefined) {
        return defaultValue;
      }
    }

    return result ?? defaultValue;
  }

  _compileTemplate(template: string, ctx: Object) {
    let tmpl: string = template
    //let tmpl: string = this._template
    let key = null;
    const regExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = this.get(ctx, tmplValue, "");

        if (typeof data === "function") {
          // (window as any)[tmplValue] = data;
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
