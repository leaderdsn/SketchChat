import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockSendPanel } from "~src/components/chat/sendPanel/types";
import Input from "~src/components/base/input";
import Button from "~src/components/base/button";
import Textarea from "~src/components/base/textarea";

export default class SendPanel extends Block<BlockSendPanel> {
  constructor(props: BlockSendPanel) {
    super(props as P);
  }

  init() {
    const uploadHandler = () => {
      console.log("upload");
    };

    const sendHandler = () => {
      console.log("send");
    };

    const inputFile = new Input({
      id: "file",
      className: "y-file-control",
      typeInput: "file",
    });

    const uploadButton = new Button({
      id: "upload",
      className: "y-btn-upload",
      typeButton: "Button",
      text: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999"/>
      </svg>`,
      events: {
        click: uploadHandler,
      },
    });

    const sendTextarea = new Textarea({
      id: "send",
      className: "y-send-control",
      name: "send",
      placeholder: "Сообщение",
    });

    const sendButton = new Button({
      id: "sendButton",
      className: "y-btn-send",
      typeButton: "button",
      text: `<svg xmlns="http://www.w3.org/2000/svg" width="64pt" height="64pt" viewBox="0 0 64 64" style="isolation:isolate">
      <path d=" M 8.216 36.338 L 26.885 32.604 C 28.552 32.271 28.552 31.729 26.885 31.396 L 8.216 27.662 C 7.104 27.44 6.021 26.356 5.799 25.245 L 2.065 6.576 C 1.731 4.908 2.714 4.133 4.259 4.846 L 61.228 31.139 C 62.257 31.614 62.257 32.386 61.228 32.861 L 4.259 59.154 C 2.714 59.867 1.731 59.092 2.065 57.424 L 5.799 38.755 C 6.021 37.644 7.104 36.56 8.216 36.338 Z "/>
      </svg>`,
      events: {
        click: sendHandler,
      },
    });

    this.children = {
      upload: [inputFile, uploadButton],
      textArea: sendTextarea,
      sendButton: sendButton,
    };
  }

  render() {
    return `
    <div class='y-send-panel'>
      {{upload}}
      {{textArea}}
      {{sendButton}}
    </div>
    `;
  }
}
