class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  _template: string


  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: string) {
    return this._compileTemplate(this._template, ctx);
  }

  get(obj: string, path: string, defaultValue: string | null) {
    const keys: string[] = path.split(".");

    let result: string = obj;
    for (const key of keys) {
      result = result[key as any];

      if (result === undefined) {
        return defaultValue;
      }
    }
    console.log('compile', result)
    return result ?? defaultValue;
  }

  _compileTemplate(template: string, ctx: string):string {
    let tmpl: string = template
    //let tmpl: string = this._template
    let key = null;
    const regExp: RegExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = this.get(ctx, tmplValue, "");

        if (typeof data === "function") {
          tmpl = tmpl.replace(
            new RegExp(key[0], "gi"),
            `window.${key[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data as string);
      }
    }

    return tmpl;
  }
}

export default Templator;
