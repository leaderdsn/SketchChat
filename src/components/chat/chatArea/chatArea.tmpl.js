const chatAreaTemplate = `
    <div class='{{classNameChat}}'>
      <div class='{{classNameHeaderPanel}}'>
        {{headerPanel}}
      </div>
      <div class='{{classNameMessagesPanel}}'>
        {{messagesList}}
      </div>
      <div class='{{classNameSendPanel}}'>
        {{sendPanel}}
      </div>
    </div>
  `;
export default chatAreaTemplate;