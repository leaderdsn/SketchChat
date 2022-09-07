export type BlockButton = {
  id?: number | string;
  className?: string;
  typeButton?: string | null;
  events?: {
    click: () => void;
  };
  text?: string | null;
};
