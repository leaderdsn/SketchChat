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
import { SigninFormData } from "~src/pages/signin/types";

export default class Signin extends Block<LoginAndSignIn> {
  constructor(props: LoginAndSignIn) {
    super(props as P);
  }

  init() {
    const formData: SigninFormData = {
      email: null,
      login: null,
      firstName: null,
      lastName: null,
      phone: null,
      repeatPassword: null,
      password: null,
    };

    const errorData: SigninFormData = {
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

    const blurValidate = () => {
      Object.entries(formData).forEach(([key, value]) => {
        errorData[key as unknown as number] = validate(value, key)
      })
      setErrorData()
    }

    const submit = () => {
      console.log('form-data: ', formData)
      
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
      events: {
        input: (event) => inputHandler(event, "email"),
        blur: blurValidate
      },
    });

    const inputLogin = new Input({
      id: "login",
      typeInput: "text",
      className: "y-field-control",
      inputName: "login",
      events: {
        input: (event) => inputHandler(event, "login"),
        blur: blurValidate
      },
    });

    const inputFirstName = new Input({
      id: "firstName",
      typeInput: "text",
      className: "y-field-control",
      inputName: "firstName",
      events: {
        input: (event) => inputHandler(event, "firstName"),
        blur: blurValidate
      },
    });

    const inputLastName = new Input({
      id: "lastName",
      typeInput: "text",
      className: "y-field-control",
      inputName: "lastName",
      events: {
        input: (event) => inputHandler(event, "lastName"),
        blur: blurValidate
      },
    });

    const inputPhone = new Input({
      id: "phone",
      typeInput: "text",
      className: "y-field-control",
      inputName: "phone",
      events: {
        input: (event) => inputHandler(event, "phone"),
        blur: blurValidate
      },
    });

    const inputPassword = new Input({
      id: "password",
      typeInput: "password",
      className: "y-field-control",
      inputName: "password",
      events: {
        input: (event) => inputHandler(event, "password"),
        blur: blurValidate
      },
    });

    const inputRepeatPassword = new Input({
      id: "repeatPassword",
      typeInput: "password",
      className: "y-field-control",
      inputName: "repeatPassword",
      events: {
        input: (event) => inputHandler(event, "repeatPassword"),
        blur: blurValidate
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
