import Input from "~src/components/base/input";
import Label from "~src/components/base/label";
import Link from "~src/components/base/link";
import Form from "~src/components/base/form";
import Block from "~src/utils/block";
import Button from "~src/components/base/button/button";
import { LoginAndSignIn } from "~src/types";
import { P } from "~src/types";
import { blurValidate } from "~src/utils/validate";
import Piece from "~src/components/base/piece";
import { FormData } from "~src/pages/types";

export default class Signin extends Block<LoginAndSignIn> {
  constructor(props: LoginAndSignIn) {
    super(props as P);
  }

  init() {
    const formData: FormData = {
      email: null,
      login: null,
      firstName: null,
      lastName: null,
      phone: null,
      repeatPassword: null,
      password: null,
    };

    const errorData: FormData = {
      email: null,
      login: null,
      firstName: null,
      lastName: null,
      phone: null,
      repeatPassword: null,
      password: null,
    };

    const inputHandler = (e: Event, key: string) => {
      formData[key as unknown as number] = (
        e.target! as HTMLInputElement
      ).value;
    };

    const setErrorData = () => {
      errorEmail.setProps({
        content: errorData.email,
      });

      errorLogin.setProps({
        content: errorData.login,
      });

      errorFirstName.setProps({
        content: errorData.firstName,
      });

      errorLastName.setProps({
        content: errorData.lastName,
      });

      errorPhone.setProps({
        content: errorData.phone,
      });

      errorPassword.setProps({
        content: errorData.password,
      });

      errorRepeatPassword.setProps({
        content: errorData.repeatPassword,
      });
    };

    const submit = () => {
      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );

      if (isValid) {
        document.location.pathname = "/login";
        alert("Пользователь успешно зарегистрирован!");
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
      content: errorData.firstName,
    });

    const errorLastName = new Piece({
      className: "y-field-error",
      content: errorData.lastName,
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
      content: errorData.repeatPassword,
    });

    const inputEmail = new Input({
      id: "email",
      typeInput: "text",
      className: "y-field-control",
      inputName: "email",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "email"),
        blur: () => blurValidate(formData, errorData, setErrorData)
      },
    });

    const inputLogin = new Input({
      id: "login",
      typeInput: "text",
      className: "y-field-control",
      inputName: "login",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "login"),
        blur: () => blurValidate(formData, errorData, setErrorData)
      },
    });

    const inputFirstName = new Input({
      id: "firstName",
      typeInput: "text",
      className: "y-field-control",
      inputName: "firstName",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "firstName"),
        blur: () => blurValidate(formData, errorData, setErrorData)
      },
    });

    const inputLastName = new Input({
      id: "lastName",
      typeInput: "text",
      className: "y-field-control",
      inputName: "lastName",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "lastName"),
        blur: () => blurValidate(formData, errorData, setErrorData)
      },
    });

    const inputPhone = new Input({
      id: "phone",
      typeInput: "text",
      className: "y-field-control",
      inputName: "phone",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "phone"),
        blur: () => blurValidate(formData, errorData, setErrorData)
      },
    });

    const inputPassword = new Input({
      id: "password",
      typeInput: "password",
      className: "y-field-control",
      inputName: "password",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "password"),
        blur: () => blurValidate(formData, errorData, setErrorData)
      },
    });

    const inputRepeatPassword = new Input({
      id: "repeatPassword",
      typeInput: "password",
      className: "y-field-control",
      inputName: "repeatPassword",
      inputValue: null,
      placeholder: '',
      events: {
        input: (event) => inputHandler(event, "repeatPassword"),
        blur: () => blurValidate(formData, errorData, setErrorData)
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
      className: "y-btn",
      typeButton: "button",
      events: {
        click: submit,
      },
      text: "Зарегистрироваться",
    });

    const linkToLogin = new Link({
      id: "goLogin",
      className: "text-link",
      src: "/login",
      textLink: "Войти",
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
