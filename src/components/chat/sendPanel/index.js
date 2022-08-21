import sendPanelTemplate from "~src/components/chat/sendPanel/sendPanel.tmpl";
import inputTemplate from "~src/components/base/input/input.tmpl";
import textareaTemplate from "~src/components/base/textarea/textarea.tmpl";
import buttonTemplate from "~src/components/base/button/button.tmpl";
import { svgAttech, svgSend } from "~src/modules/data";
import constructor from "~src/modules/constructor";

const contextInputFile = {
  id: "file",
  className: "y-file-control",
  typeInput: "file",
};

const contextUploadButton = {
  id: "upload",
  className: "y-btn-upload",
  value: '',
  text: svgAttech,
};

const contextSendButton = {
  id: "sendButton",
  className: "y-btn-send",
  value: "Upload",
  click: () => {},
  text: svgSend,
};

const contextSendTextarea = {
  id: "send",
  className: "y-send-control",
  name: "send",
  placeholder: "Сообщение",
};

const upload = [
  constructor(contextInputFile, inputTemplate),
  constructor(contextUploadButton, buttonTemplate),
];

const contextSendPanel = {
  upload: upload.join(""),
  textArea: constructor(contextSendTextarea, textareaTemplate),
  sendButton: constructor(contextSendButton, buttonTemplate),
};

export default constructor(contextSendPanel, sendPanelTemplate);
