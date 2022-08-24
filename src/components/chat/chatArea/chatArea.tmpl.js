const chatAreaTemplate = `
  <div class='y-chat-area'>
    <div class='y-chat-area__header'>
      {{headerPanel}}
    </div>
    <div class='y-chat-area__body'>
      {{messagesList}}
    </div>
    <div class='y-chat-area__footer'>
      {{sendPanel}}
    </div>
  </div>
`;
export default chatAreaTemplate;