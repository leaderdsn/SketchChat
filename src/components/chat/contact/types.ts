import { User } from "~src/api/authAPI";
import Time from "~src/components/base/time/time";
import { ChatsData } from "~src/api/chatsAPI";
import UserAvatar from "~src/components/profile/userAvatar";
import { Nullable } from "~src/utils/types";


export interface LastMessage {
  user: User;
  time: Nullable<string>;
  content: string;
}
export interface BlockContact {
  id: string | number
  title: string;
  avatar: Nullable<UserAvatar>;
  unread_count: number;
  last_message: LastMessage
  selectedChat: ChatsData;
  dateTime: Nullable<Time>;
  content: Nullable<string>;
  events?: {
    click: () => void;
  };
}
