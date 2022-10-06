import { User } from "~src/api/authAPI";
import Time from "~src/components/base/time/time";
import HTTPTransport from "~src/utils/HTTPTransport";
import { Nullable } from "~src/utils/types";

export interface ChatsMessage {
  user: User;
  time: Nullable<Time>;
  content: string;
}
export interface ChatsData {
  id: number;
  title: Nullable<string>;
  avatar?: Nullable<string>;
  unread_count?: Nullable<number>;
  last_message?: ChatsMessage;
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

export class ChatsAPI {
  protected http: HTTPTransport;

  public constructor() {
    this.http = new HTTPTransport("/chats");
  }

  create(data: ChatsData): Promise<XMLHttpRequest> {
    return this.http.post("/", { data });
  }

  read(): Promise<XMLHttpRequest> {
    return this.http.get("/");
  }

  deleteChat(data: ChatDelete): Promise<XMLHttpRequest> {
    return this.http.delete("/", { data });
  }

  getTokenChat(id: number): Promise<XMLHttpRequest> {
    return this.http.post(`/token/${id}`);
  }
}

export default new ChatsAPI();
