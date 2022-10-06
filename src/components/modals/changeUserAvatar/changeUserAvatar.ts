import { ProfileData } from "~src/api/profileAPI";
import ProfileController from "~src/controllers/profile";
import Input from "~src/components/base/input";
import Button from "~src/components/base/button";
import Form from "~src/components/base/form";
import { TargetFiles } from "~src/components/modals/changeUserAvatar/types";
import Block from "~src/utils/block";
import store from "~src/utils/store";
import { Nullable } from "~src/utils/types";
import { LoginAndSignup } from "~src/types";

export class ChangeUserAvatar extends Block {
  constructor(props: LoginAndSignup) {
    super(props as LoginAndSignup);
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
    <div class='y-modal'>
      <div class='y-modal__content'>
        <div class='y-modal__header'>
          {{headerText}}
        </div>
        <div class='y-modal__body'>
          {{form}}
        </div>
        <div class='y-modal__footer'>
          {{content}}
        </div>
      </div>
    </div>
    `;
  }
}


export default new ChangeUserAvatar({});
