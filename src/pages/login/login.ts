import Input from "~src/components/base/input";
import Label from "~src/components/base/label";
import Link from "~src/components/base/link";
import Form from "~src/components/base/form";
import Block from "~src/utils/block";
import Button from "~src/components/base/button/button";
import { LoginAndSignIn } from "~src/types";
import { P } from "~src/types";
import validate from "~src/utils/validate";
import Piece from "~src/components/base/piece";
import { LoginFormData } from "~src/pages/login/types";

export default class Login extends Block<LoginAndSignIn> {
  constructor(props: LoginAndSignIn) {
    super(props as P);
  }

  init() {
    const formData: LoginFormData = {
      login: null,
      password: null,
    };

    const errorData: any = {
      login: null,
      password: null,
    };

    const inputHandler = (e: Event, key: string) => {
      formData[key as unknown as number] = (
        e.target! as HTMLInputElement
      ).value;
    };

    const setErrorData = () => {
      errorLogin.setProps({
        content: errorData.login,
      });

      errorPassword.setProps({
        content: errorData.password,
      });
    };

    const submit = () => {
      Object.entries(formData).forEach(([key, value]) => {
        errorData[key as unknown as number] = validate(value, key);
      });

      setErrorData();

      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );

      if (isValid) {
        alert("Пользователь успешно авторизован!");
        document.location.pathname = "/chat";
      } else {
        alert("Проверьте правильность логина и пароля!");
      }
    };

    this.setProps({ headerText: "Вход" });

    const errorLogin = new Piece({
      className: "y-field-error",
      content: errorData.login,
    });

    const errorPassword = new Piece({
      className: "y-field-error",
      content: errorData.password,
    });

    const inputLogin = new Input({
      id: "login",
      typeInput: "text",
      className: "y-field-control",
      inputName: "login",
      events: {
        input: (event) => inputHandler(event, "login"),
      },
    });

    const inputPassword = new Input({
      id: "password",
      typeInput: "password",
      className: "y-field-control",
      inputName: "password",
      events: {
        input: (event) => inputHandler(event, "password"),
      },
    });

    const labelLogin = new Label({
      forName: "login",
      labelName: "Логин",
      className: "y-field-text",
      input: inputLogin,
      error: errorLogin,
    });

    const labelPassword = new Label({
      forName: "password",
      labelName: "Пароль",
      className: "y-field-text",
      input: inputPassword,
      error: errorPassword,
    });

    const buttonSign = new Button({
      className: "y-btn",
      typeButton: "button",
      events: {
        click: submit,
      },
      text: "Вход",
    });

    const linkSignIn = new Link({
      id: "goSignin",
      className: "text-link",
      src: "/signin",
      textLink: "Нет аккаунта?",
    });

    this.children.form = new Form({
      className: "y-login-page__form",
      content: [labelLogin, labelPassword, buttonSign, linkSignIn],
    });
  }

  render() {
    return `
    <div class='y-login-page'>
      <div class='y-login-page__header'>
        {{headerText}}
      </div>
      {{form}}
      {{content}}
    </div>
    `;
  }
}
