export type BlockContact = {
  nameContact?: string | null;
  descriptionContact?: string | null;
  dateTime?: Date | string | null;
  notificationCount?: number | null;
  events?: {
    click: () => void;
  };
};
