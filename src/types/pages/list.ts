import { DataInterface } from "../components";

export interface TableInterface {
  currShoppingList: DataInterface[];
  handleReorder: (index: number, moveUp?: boolean) => void;
  openEditForm: (item: DataInterface, index: number) => void;
  handleDelete: (index: number) => void;
}
