import { TDataContacts, TDataMessage, TRecordType } from "~src/modules/types";

const clone = (countClone: number, data: TDataMessage[] | TDataContacts[]): Record<string, TRecordType>[] => {
  const res = [];
  for (let i = 0; i < countClone; i++) {
    res.push(...data);
  }
  return res;
};

export default clone;
