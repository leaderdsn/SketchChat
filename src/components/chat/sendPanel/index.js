import sendPanelTemplate from "./sendPanel.tmpl";
import constructor from "../../../modules/constructor";
import inputTemplate from "../../base/input/input.tmpl";
import textareaTemplate from "../../base/textarea/textarea.tmpl";
import buttonTemplate from "../../base/button/button.tmpl";
import { svgAttech, svgSend } from "../../../modules/data"
let attribute = Symbol('hidden')
const contextInputFile = {
  id: 'file',
  className: 'y-file-control',
  typeInput: 'file',
}

const contextUploadButton = {
  id: 'upload',
  className: 'y-btn-upload',
  value: null,
  text: svgAttech,
}

const contextSendButton = {
  id: 'sendButton',
  className: 'y-btn-send',
  value: 'Upload',
  handleClick: null,
  text: svgSend,
}

const contextSendTextarea = {
  id: 'send',
  className: 'y-send-control',
  name: 'send',
  placeholder: 'Сообщение',
}

const upload = [ 
  constructor(contextInputFile, inputTemplate),
  constructor(contextUploadButton, buttonTemplate),
]

const contextSendPanel = {
  className: 'y-send-panel',
  upload: upload.join(''),
  textArea: constructor(contextSendTextarea, textareaTemplate),
  sendButton: constructor(contextSendButton, buttonTemplate),
}

export default constructor(contextSendPanel, sendPanelTemplate);