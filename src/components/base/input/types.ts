export type BlockInput = {
  id?: number | string;
  typeInput?: string;
  className?: string;
  inputName?: string | null;
  placeholder?: string | null;
  events?: {
    input: (e: Event) => void;
  };
  inputValue?: string | null | undefined;
};
