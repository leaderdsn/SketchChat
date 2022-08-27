import contactTemplate from "~src/components/chat/contact/contact.tmpl";

export type TContextContact = {
  nameContact: string | null,
  descriptionContact: string | null,
  dateTime: Date | string | null,
  notificationCount: number | null
}

export default contactTemplate;