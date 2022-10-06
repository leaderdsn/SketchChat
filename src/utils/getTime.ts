import Time from "~src/components/base/time/time";
import { Nullable } from "~src/utils/types";

const getTime = (date: Nullable<Time>) => {
  if (date) {
    const newDate = new Date(date as unknown as Date );
    const h = newDate.getHours();
    const m = newDate.getMinutes();
    return `${h}:${m}`;
  }
  return null;
};

export default getTime;
