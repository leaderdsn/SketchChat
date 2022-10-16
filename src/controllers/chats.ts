import API, { ChatsAPI, ChatsData, ChatDelete } from '~src/api/chatsAPI';
import MessagesController from '~src/controllers/messages';
import store from '~src/utils/store';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async createChat(data: ChatsData) {
    await this.api
      .create(data)
      .then((res) => {
        if (res.status < 400) {
          this.fetchChats();
        } else {
          alert(res.response.reason);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  async deleteChat(data: ChatDelete) {
    await this.api
      .deleteChat(data)
      .then((res) => {
        if (res.status < 400) {
        } else {
          alert(res.response.reason);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  async selectChat(id: number) {
    store.set('selectedChat', id);
  }

  async fetchChats() {
    await this.api
      .read()
      .then((res) => {
        if (res.status < 400) {
          store.set('chats', res.response);
          res.response.map(async ({ id }: ChatsData) => {
            const { response } = await this.api.getTokenChat(id);
            await MessagesController.connect(id, response.token as unknown as string);
          });
        } else {
          alert(res.response.reason);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
}

export default new ChatsController();
