import { Nullable } from "~src/utils/types";

export type TDataMessage = {
  id: Nullable<number>;
  author: Nullable<string>;
  content: Nullable<string | null>;
  date: Nullable<Date | string>;
}

export type TDataContacts = {
  id: number;
  nameContact: string;
  descriptionContact: Nullable<string>;
  dateTime: Nullable<Date | string>;
  notificationCount: Nullable<number>;
}