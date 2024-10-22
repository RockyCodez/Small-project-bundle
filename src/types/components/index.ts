export interface DropdownInterface {
  label: string;
  selectedOption?: number;
  setSelectedOption: (data: number) => void;
}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
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

export interface IPortal {
  onClose: () => void;
  onSubmit: (data: any) => void;
  itemToEdit?: DataInterface;
}

export interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
}
