const contactTemplate = `
  <div class='y-contact-item'>
    <div class='y-contact-item__avatar'></div>
    <div class='y-contact-item__description'>
      <strong>{{nameContact}}</strong>
      <p>{{descriptionContact}}</p>
    </div>
    <div class='y-contact-item__info'>
      <span class='y-contact-item__date-time'>{{dateTime}}</span>
      <span class='y-contact-item__notification-count'>{{notificationCount}}</span>
    </div>
  </div>
`;
export default contactTemplate;