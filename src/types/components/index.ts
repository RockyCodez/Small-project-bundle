import { CharacterInterface } from "../api";

export interface DropdownInterface {
  label: string;
  selectedOption?: number;
  setSelectedOption: (data: number) => void;
}

export interface InputInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  helperText?: string;
}

export interface DataInterface {
  price: number;
  quantity: number;
  title: string;
}

export interface FormDataInterface extends DataInterface {
  isAddedToStart: number;
}

export interface FormInterface {
  submitData: (data: FormDataInterface) => void;
  itemToEdit?: DataInterface;
}

export interface PortalInterface {
  onClose: () => void;
  onSubmit: (data: any) => void;
  itemToEdit?: DataInterface;
}

export interface ButtonInterface
  extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
}

export interface PageButtonsInterface {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface CharacterCardInterface {
  character: CharacterInterface;
  onClick: () => void;
}
