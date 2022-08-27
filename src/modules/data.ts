type TDataMessage = {
  id: number,
  author: string,
  content: string | null,
  date: Date | string | null
}

type TDataContacts = {
  id: number,
  nameContact: string,
  descriptionContact: string | null,
  dateTime: Date | string | null,
  notificationCount: number | null,
}

export const dataMessages: TDataMessage[] = [
  {
    id: 1,
    author: "Андрей",
    content:
      "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.",
    date: "11:96",
  },
  {
    id: 2,
    author: "Алёна",
    content: "Ого! Хороший аппарат =)",
    date: "11:96",
  },
  {
    id: 3,
    author: "Андрей",
    content: "Мне тоже нравится",
    date: "11:96",
  },
];

export const dataContacts: TDataContacts[] = [
  {
    id: 1,
    nameContact: "Петя",
    descriptionContact: "Как я устал, я сегодня опять всю ночь работал =(",
    dateTime: "05:44",
    notificationCount: 6,
  },
  {
    id: 2,
    nameContact: "Cергей",
    descriptionContact: "Привет! Как дела?",
    dateTime: "12:44",
    notificationCount: 100,
  },
  {
    id: 3,
    nameContact: "Юля",
    descriptionContact:
      "Меня до субботы не будет дома. Ключь у двери под ковриком. Всё что в холодильнике можешь брать. В общем чувствуй себя как дома Если что, звони!",
    dateTime: "10:44",
    notificationCount: 12,
  },
];