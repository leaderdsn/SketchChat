import { PasswordChangeFormData } from '~src/components/profile/profilePasswordChange/types';
import { ProfileChangeFormData } from '~src/components/profile/profileChange/types';
import { FormData } from '~src/pages/types';

type Value = string | undefined | null;

const REGEXP_EMAIL = /^$|\S+@\S+\.\S+/;
const REGEXP_PHONE = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
const REGEXP_PASSWORD = /^(?=.*\d)\w{6,20}$/;
let repeatPassword: string;

const isValidNull = (value: Value) => {
  return value === null;
};

const isValidUndefined = (value: Value) => {
  return value === undefined;
};

const isValidLength = (value: Value) => {
  return value!.length < 3;
};
const isValidEmail = (value: string) => {
  return REGEXP_EMAIL.test(value);
};

const isValidPhone = (value: string) => {
  return REGEXP_PHONE.test(value);
};

const isValidPassword = (value: string) => {
  if (REGEXP_PASSWORD.test(value)) {
    repeatPassword = value;
    return true;
  } else return false;
};

const isValidRepeatPassword = (value: string) => {
  return repeatPassword === value;
};

const validate = (value: Value, type: string) => {
  switch (type) {
    case 'email':
      if (!isValidEmail(value as string)) {
        return 'Указана некорректная почта';
      } else return null;
    case 'password':
      if (!isValidPassword(value as string)) {
        return 'Пароль должен содержать от 6 до 20 символов, латинские буквы верхнего и нижнего регистра';
      } else return null;
    case 'repeat_password':
      if (!isValidRepeatPassword(value as string)) {
        return 'Пароли не совпадают';
      } else return null;
    case 'phone':
      if (!isValidPhone(value as string)) {
        return 'Некорректный номер телефона';
      } else return null;
    default:
      if (isValidNull(value)) {
        return 'Поле не может быть пустым';
      } else if (isValidUndefined(value)) {
        return 'Поле не может быть пустым';
      } else if (isValidLength(value)) {
        return 'Поле должно содержать минимум 3 символа';
      } else return null;
  }
};

type Form = FormData | ProfileChangeFormData | PasswordChangeFormData;

export const blurValidate = (form: Form, error: Form, callback: () => void) => {
  Object.entries(form).forEach(([key, value]) => {
    error[key as unknown as number] = validate(value, key);
  });
  callback();
};

export default validate;
