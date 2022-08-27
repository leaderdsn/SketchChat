import constructor, { TRecordType } from "~src/modules/constructor";

const setDataToContext = (context: Record<string, TRecordType>, template: string, data: Record<string, TRecordType>[] ) => {
  const res: string[] = [];
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
      throw new Error("Ошибка типа данных, data не массив!");
    }
  }
};

export default setDataToContext;
