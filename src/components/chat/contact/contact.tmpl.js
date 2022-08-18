const contactTemplate = `
  <div class='{{classNameContact}}'>
    <div class='{{classNameAvatar}}'></div>
    <div class='{{classNameDescription}}'>
      <strong>{{nameContact}}</strong>
      <p>{{descriptionContact}}</p>
    </div>
    <div class='{{classNameInfo}}'>
      <span class='{{classNameDateTime}}'>{{dateTime}}</span>
      <span class='{{classNameNotificationCount}}'>{{notificationCount}}</span>
    </div>
  </div>
`;
export default contactTemplate;