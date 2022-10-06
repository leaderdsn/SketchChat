import { ChatsData } from "~src/api/chatsAPI";
import MessagesController, { MessageInfo } from "~src/controllers/messages";
import Button from "~src/components/base/button";
import Input from "~src/components/base/input";
import Time from "~src/components/base/time";
import Textarea from "~src/components/base/textarea";
import HeaderPanel from "~src/components/chat/headerPanel";
import SendPanel from "~src/components/chat/sendPanel";
import Message from "~src/components/chat/message";
import MessagesList from "~src/components/chat/messagesList";
import UserAvatar from "~src/components/profile/userAvatar";
import UploadIcon from "~src/components/icons/upload";
import SendIcon from "~src/components/icons/send";
import withStore from "~src/utils/HOC/withStore";
import Block from "~src/utils/block";
import { P } from "~src/types";

type MsgProps = {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
};

class ChatAreaBase extends Block {
  
  protected init() {
    this.children.headerPanel = this.createHeaderPanel(this.props);
  }

  protected componentDidUpdate(_: P, newProps: P): boolean {

    this.children.headerPanel = this.createHeaderPanel(newProps);

    this.children.messagesList = new MessagesList({
      messages: this.createMessages(newProps) as unknown as MessageInfo[],
    });

    this.children.sendPanel = this.createSendPanel(newProps);

    return true;
  }

  private createMessages({ messages, userId }: MsgProps) {
    return messages.map((data: MessageInfo) => {
      return new Message({
        ...data,
        isMine: userId === data.user_id,
        time: new Time({
          time: data.time ? data.time : null
        }),
      });
    });
  }

  private createHeaderPanel(props: P) {
    return new HeaderPanel({
      avatarContent: new UserAvatar({
        src: props.openChat ? props.openChat.avatar : null,
      }),
      contactName: props.openChat ? props.openChat.title : null,
      controlButton: null,
    });
  }

  private createSendPanel(props: MsgProps) {
    const submit = () => {
      if (!props.selectedChat) {
        return;
      }

      const message = sendTextarea.getValue();
      MessagesController.sendMessages(props.selectedChat, message as string);
      sendTextarea.setValue("");
    };

    const inputFile = new Input({
      id: "file",
      typeInput: "file",
      className: "y-file-control",
      inputName: null,
      placeholder: null,
      events: null,
      inputValue: null,
    });

    const uploadButton = new Button({
      id: "upload",
      className: "y-btn-upload",
      typeButton: "Button",
      text: UploadIcon,
    });

    const sendTextarea = new Textarea({
      id: "send",
      className: "y-send-control",
      rows: null,
      cols: null,
      maxLength: null,
      name: "send",
      placeholder: "Сообщение",
      value: null,
    });

    const sendButton = new Button({
      id: "sendButton",
      className: "y-btn-send",
      typeButton: "button",
      text: SendIcon,
      events: {
        click: submit,
      },
    });

    return new SendPanel({
      upload: [inputFile, uploadButton],
      textArea: sendTextarea,
      sendButton: sendButton,
    });
  }

  render() {
    const { selectedChat } = this.props;
    return `
    <div class='y-chat-area'>
      <div class='y-chat-area__header'>
        {{headerPanel}}
      </div>
      <div class='y-chat-area__body'>
        ${selectedChat ? `{{messagesList}}` : "Выберите чат"}
      </div>
      <div class='y-chat-area__footer'>
        {{sendPanel}}
      </div>
    </div>
    `;
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
      openChat: undefined,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
    openChat: (state.chats || []).find(({ id }: ChatsData) => {
      return id === state.selectedChat;
    }),
  };
});

export const ChatArea = withSelectedChatMessages(ChatAreaBase);
