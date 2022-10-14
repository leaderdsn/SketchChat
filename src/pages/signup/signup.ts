import { SignupData } from "~src/api/authAPI";
import AuthController from "~src/controllers/auth";
import Button from "~src/components/base/button/button";
import Input from "~src/components/base/input";
import Form from "~src/components/base/form";
import Label from "~src/components/base/label";
import Piece from "~src/components/base/piece";
import Link from "~src/components/base/link";
import GuestLayout from "~src/layouts/guestLayout/guestLayout";
import { FormData } from "~src/pages/types";
import { LoginAndSignup } from "~src/types";
import Block from "~src/utils/block";
import { blurValidate } from "~src/utils/validate";

export class SignupPage extends GuestLayout {
  constructor() {
    super({
      content: new Signup({}),
    });
  }
}

export default class Signup extends Block<LoginAndSignup> {
  constructor(props: LoginAndSignup) {
    super(props as LoginAndSignup);
  }

  init() {
    const formData: FormData = {
      email: null,
      login: null,
      first_name: null,
      second_name: null,
      phone: null,
      password: null,
      repeat_password: null,
    };

    const errorData: FormData = {
      email: null,
      login: null,
      first_name: null,
      second_name: null,
      phone: null,
      password: null,
      repeat_password: null,
    };

    const inputHandler = (e: Event, key: string) => {
      formData[key as unknown as number] = (
        e.target! as HTMLInputElement
      ).value.trim();
    };

    const setErrorData = () => {
      errorEmail.setProps({
        content: errorData.email,
      });

      errorLogin.setProps({
        content: errorData.login,
      });

      errorFirstName.setProps({
        content: errorData.first_name,
      });

      errorLastName.setProps({
        content: errorData.second_name,
      });

      errorPhone.setProps({
        content: errorData.phone,
      });

      errorPassword.setProps({
        content: errorData.password,
      });

      errorRepeatPassword.setProps({
        content: errorData.repeat_password,
      });
    };

    const submit = async () => {
      blurValidate(formData, errorData, setErrorData);

      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );

      if (isValid) {
        await AuthController.signup(formData as SignupData);
      } else {
        alert("Проверьте правильность заполнения полей!");
      }
    };

    this.setProps({ headerText: "Регистрация" });

    const errorEmail = new Piece({
      className: "y-field-error",
      content: errorData.email,
    });

    const errorLogin = new Piece({
      className: "y-field-error",
      content: errorData.login,
    });

    const errorFirstName = new Piece({
      className: "y-field-error",
      content: errorData.first_name,
    });

    const errorLastName = new Piece({
      className: "y-field-error",
      content: errorData.second_name,
    });

    const errorPhone = new Piece({
      className: "y-field-error",
      content: errorData.phone,
    });

    const errorPassword = new Piece({
      className: "y-field-error",
      content: errorData.password,
    });

    const errorRepeatPassword = new Piece({
      className: "y-field-error",
      content: errorData.repeat_password,
    });

    const inputEmail = new Input({
      id: "email",
      typeInput: "text",
      className: "y-field-control",
      inputName: "email",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "email"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputLogin = new Input({
      id: "login",
      typeInput: "text",
      className: "y-field-control",
      inputName: "login",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "login"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputFirstName = new Input({
      id: "firstName",
      typeInput: "text",
      className: "y-field-control",
      inputName: "firstName",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "first_name"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputLastName = new Input({
      id: "lastName",
      typeInput: "text",
      className: "y-field-control",
      inputName: "lastName",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "second_name"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputPhone = new Input({
      id: "phone",
      typeInput: "text",
      className: "y-field-control",
      inputName: "phone",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "phone"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputPassword = new Input({
      id: "password",
      typeInput: "password",
      className: "y-field-control",
      inputName: "password",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "password"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputRepeatPassword = new Input({
      id: "repeatPassword",
      typeInput: "password",
      className: "y-field-control",
      inputName: "repeatPassword",
      inputValue: null,
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "repeat_password"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const labelEmail = new Label({
      forName: "email",
      labelName: "Почта",
      className: "y-field-text",
      input: inputEmail,
      error: errorEmail,
    });

    const labelLogin = new Label({
      forName: "login",
      labelName: "Логин",
      className: "y-field-text",
      input: inputLogin,
      error: errorLogin,
    });

    const labelFirstName = new Label({
      forName: "firstName",
      labelName: "Имя",
      className: "y-field-text",
      input: inputFirstName,
      error: errorFirstName,
    });

    const labelLastName = new Label({
      forName: "lastName",
      labelName: "Фамилия",
      className: "y-field-text",
      input: inputLastName,
      error: errorLastName,
    });

    const labelPhone = new Label({
      forName: "phone",
      labelName: "Телефон",
      className: "y-field-text",
      input: inputPhone,
      error: errorPhone,
    });

    const labelPassword = new Label({
      forName: "password",
      labelName: "Пароль",
      className: "y-field-text",
      input: inputPassword,
      error: errorPassword,
    });

    const labelRepeatPassword = new Label({
      forName: "repeatPassword",
      labelName: "Пароль (еще раз)",
      className: "y-field-text",
      input: inputRepeatPassword,
      error: errorRepeatPassword,
    });

    const buttonSubmit = new Button({
      id: null,
      className: "y-btn-primary",
      typeButton: "button",
      events: {
        click: submit,
      },
      text: "Зарегистрироваться",
    });

    const linkToLogin = new Link({
      className: "text-link",
      content: "Войти",
      to: "/",
    });

    this.children.form = new Form({
      method: "POST",
      className: "y-signin-page__form",
      content: [
        labelEmail,
        labelLogin,
        labelFirstName,
        labelLastName,
        labelPhone,
        labelPassword,
        labelRepeatPassword,
        buttonSubmit,
        linkToLogin,
      ],
    });
  }

  render() {
    return `
    <div class='y-signin-page'>
      <div class='y-signin-page__header'>
        {{headerText}}
      </div>
      {{form}}
      {{content}}
    </div>
    `;
  }
}
