import constructor from "~src/modules/constructor";
import { TRecordType } from "~src/modules/types";

const setDataToContext = (context: Record<string, TRecordType>, template: string, data: Record<string, TRecordType>[] ) => {
  let res: string[] = [];
  try {
    data.forEach((item: Record<string, TRecordType>) => {
      for (const keyData in item) {
        for (const key in context) {
          if (key === keyData) {
            context[key] = item[keyData];
          }
        }
      }
      res.push(constructor(context, template));
    });
    (res as unknown as string) = res
      .filter(function (item) {
        return item !== "\n";
      })
      .map(function (item) {
        return item.replace(/\n/g, "");
      })
      .join("");
    return res;
  } catch (e) {
    if ((e as Error).name  === "TypeError") {
      throw new Error((e as Error).message);
    }
  }
};

export default setDataToContext;
