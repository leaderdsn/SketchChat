import Input from "~src/components/base/input";
import { LoginAndSignup, P } from "~src/types";
import Block from "~src/utils/block";
import ProfileController from "~src/controllers/profile";
import Button from "~src/components/base/button";
import Form from "~src/components/base/form";
import { Nullable } from "~src/utils/types";
import store from "~src/utils/store";
import { ProfileData } from "~src/api/profileAPI";
type TargetFiles<T> = { files: T };

export class ChangeUserAvatar extends Block {
  constructor(props: LoginAndSignup) {
    super(props as P);
  }

  init() {
    this.setProps({ headerText: "Загрузить аватар" });

    let file: Nullable<File> = null;

    const formData = new FormData();

    const onFileSelected = async (e: Event) => {
      file = (e.target! as unknown as TargetFiles<File[]>).files[0];
      formData.append("avatar", file);
    };

    const submit = async () => {
      await ProfileController.changeAvatar(formData);
      await ProfileController.changeProfile(
        store.getState().user as unknown as ProfileData
      );
      file = null;
      this.hide();
    };

    const inputAvatar = new Input({
      id: "form-avatar",
      typeInput: "file",
      className: "y-field-control",
      inputName: "avatar",
      placeholder: null,
      events: {
        onchange: (event) => onFileSelected(event),
        input: (event) => onFileSelected(event),
      },
      inputValue: null,
    });

    const buttonChange = new Button({
      id: null,
      className: "y-btn-primary",
      typeButton: "button",
      events: {
        click: submit,
      },
      text: "Поменять",
    });

    const form = new Form({
      method: "POST",
      className: "y-login-page__form",
      content: [inputAvatar],
    });

    this.children.form = form;

    this.children.content = [buttonChange];
  }

  render() {
    return `
    <div class='y-change-user-avatar-modal'>
      <div class='y-change-user-avatar-modal__content'>
        <div class='y-change-user-avatar-modal__header'>
          {{headerText}}
        </div>
        <div class='y-change-user-avatar-modal__body'>
          {{form}}
        </div>
        <div class='y-change-user-avatar-modal__footer'>
          {{content}}
        </div>
      </div>
    </div>
    `;
  }
}


export default new ChangeUserAvatar({});
