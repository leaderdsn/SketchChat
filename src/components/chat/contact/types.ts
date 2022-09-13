import { Nullable } from "~src/utils/types";

export type BlockContact = {
  nameContact: Nullable<string>;
  descriptionContact: Nullable<string>;
  dateTime: Nullable<Date | string>;
  notificationCount: Nullable<number>;
  events?: {
    click: () => void;
  };
};
