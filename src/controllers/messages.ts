import store from "~src/utils/store";
import { Nullable } from "~src/utils/types";
import WSTransport, { WSTransportEvents } from "~src/utils/WSTransport";

export interface MessageInfo {
  chat_id: number;
  time: Nullable<string>;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
  isMine?: boolean;
}

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return;
    }

    const userId = store.getState().user?.id;

    const wsTransport = new WSTransport(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`
    );

    this.sockets.set(id, wsTransport);

    await wsTransport.connect();

    this.subscribe(wsTransport, id);

    this.fetchOldMessages(id);
  }

  sendMessages(id: number, message: string) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: "message",
      content: message,
    });
  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: "get old",
      content: "0",
    });
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach((socket) => socket.close());
  }

  private onMessage(id: number, messages: MessageInfo | MessageInfo[]) {
    let messagesToAdd: MessageInfo[] = [];

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse();
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || {})[id] || [];

    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messages.${id}`, messagesToAdd);
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (message) =>
      this.onMessage(id, message)
    );
    transport.on(WSTransportEvents.Close, () => this.onClose(id));
  }
}

export default new MessagesController();
