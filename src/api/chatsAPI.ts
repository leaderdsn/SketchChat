import BaseAPI from "~src/api/baseAPI";
import { Nullable } from "~src/utils/types";
import { User } from "~src/api/authAPI";

export interface ChatsData {
  id: number;
  title: Nullable<string>;
  avatar?: Nullable<string>;
  unread_count?: Nullable<number>;
  last_message?: {
    user: User;
    time: string;
    content: string;
  };
}

export interface FormChatsData {
  [key: number]: Nullable<string>;
  id?: number;
  title: Nullable<string>;
  avatar?: Nullable<string>;
  unread_count?: Nullable<number>;
  last_message?: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
}

export interface ChatDelete {
  chatId: number;
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  create(data: ChatsData) {
    return this.http.post("/", { data });
  }

  read() {
    return this.http.get("/");
  }

  deleteChat(data: ChatDelete) {
    return this.http.delete("/", { data });
  }

  getTokenChat(id: number) {
    return this.http.post(`/token/${id}`);
  }

  update = undefined;
  delete = undefined;
}

export default new ChatsAPI();
