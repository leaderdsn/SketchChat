import MainLayout from '~src/layouts/mainLayout/mainLayout';
import Chat from '~src/pages/chat';

export class ChatPage extends MainLayout {
  constructor() {
    super({
      content: new Chat({}),
    });
  }
}
