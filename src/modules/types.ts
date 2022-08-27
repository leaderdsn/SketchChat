export type TRecordType = number | string | null | undefined | number[] | string[] | Record<string, unknown> | (() => void)

export type TDataMessage = {
  id: number,
  author: string,
  content: string | null,
  date: Date | string | null
}

export type TDataContacts = {
  id: number,
  nameContact: string,
  descriptionContact: string | null,
  dateTime: Date | string | null,
  notificationCount: number | null,
}