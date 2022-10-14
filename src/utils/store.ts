import { User } from "~src/api/authAPI";
import { ChatsData } from "~src/api/chatsAPI";
import { MessageInfo } from "~src/controllers/messages";
import EventBus from "~src/utils/eventBus";
import set from "~src/utils/myLodash/set";
import { Nullable } from "~src/utils/types";

export type State = {
  auth: Boolean;
  user?: Nullable<User>;
  chats?: Nullable<ChatsData[]>;
  messages?: Record<number, MessageInfo[]>;
  selectedChat?: number;
  error?: Nullable<{}>;
};

export enum StoreEvents {
  Updated = "updated",
}

export class Store extends EventBus {
  private state: State = {
    auth: false,
  };

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

export default new Store();
