import { User } from "~src/api/authAPI";
import { ChatsData } from "~src/api/chatsAPI";
import { Nullable } from "~src/utils/types";

export interface BlockContact {
  id: number;
  title: string;
  avatar: Nullable<string>;
  unread_count: number;
  last_message: {
    user: User;
    time: Nullable<string>;
    content: string;
  };
  selectedChat: ChatsData;
  dateTime: Nullable<string>;
  content: Nullable<string>;
  events?: {
    click: () => void;
  };
}
