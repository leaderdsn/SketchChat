const profileUserTemplate: string = `
<div class='y-profile'>
  <div class='y-profile__back'>{{back}}</div>
  <div class='y-profile__content'>
    <div class='y-profile__avatar'>{{avatar}}</div>
    <div class='y-profile__data'>{{content}}</div>
    <div class='y-profile__action-list'>
      <div class='y-profile__action-item'>{{buttonChangeData}}</div>
      <div class='y-profile__action-item'>{{buttonChangePassword}}</div>
      <div class='y-profile__action-item'>{{buttonExit}}</div>
    </div>
  </div>
</div>
`;

export default profileUserTemplate;