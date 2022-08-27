import { TRecordType } from "~src/modules/constructor";

class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  _template: string


  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: Record<string, TRecordType>) {
    return this._compileTemplate(this._template, ctx);
  }

  get(obj: Record<string, TRecordType>, path: string, defaultValue: string | null) {
    const keys = path.split(".");

    let result: Record<string, TRecordType> = obj;
    for (const key of keys) {
      (result as unknown) = result[key];

      if (result === undefined) {
        return defaultValue;
      }
    }

    return result ?? defaultValue;
  }

  _compileTemplate(template: string, ctx: Record<string, TRecordType>):string {
    let tmpl: string = template
    //let tmpl: string = this._template
    let key: RegExpExecArray = null;
    const regExp: RegExp = this.TEMPLATE_REGEXP;

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

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data as string);
      }
    }

    return tmpl;
  }
}

export default Templator;
