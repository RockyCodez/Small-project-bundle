import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Portal } from "../../components";
import { DataInterface, FormDataInterface } from "../../types/components";
import Table from "./table";
import { shoppingList } from "../../data";

import "../../styles/pages/list.css";

const List = () => {
  const navigate = useNavigate();

  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [currShoppingList, setCurrShoppingList] = useState(shoppingList);
  const [itemToEdit, setItemToEdit] = useState<DataInterface>();
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleClosePortal = () => {
    setItemToEdit(undefined);
    setEditIndex(null);
    setIsPortalOpen(false);
  };

  const handleSubmit = ({
    isAddedToStart,
    title,
    quantity,
    price,
  }: FormDataInterface) => {
    if (!isAddedToStart) {
      setCurrShoppingList((prev) => [...prev, { title, quantity, price }]);
    } else {
      setCurrShoppingList((prev) => [{ title, quantity, price }, ...prev]);
    }
    handleClosePortal();
  };

  const handleReorder = (index: number, moveUp?: boolean) => {
    setCurrShoppingList((prev) => {
      const isMoveable =
        (index > 0 && moveUp) || (index < prev.length - 1 && !moveUp);

      if (isMoveable) {
        const newShoppingList = [...prev];
        const item = newShoppingList.splice(index, 1)[0];
        newShoppingList.splice(moveUp ? index - 1 : index + 1, 0, item);

        return newShoppingList;
      }
      return prev;
    });
  };

  const openEditForm = (item: DataInterface, index: number) => {
    setIsPortalOpen(true);
    setItemToEdit(item);
    setEditIndex(index);
  };

  const handleEdit = ({ title, quantity, price }: FormDataInterface) => {
    if (editIndex !== null) {
      const updatedShoppingList = [...currShoppingList];
      updatedShoppingList[editIndex] = { title, quantity, price };
      setCurrShoppingList(updatedShoppingList);
    }
    handleClosePortal();
  };

  const handleDelete = (index: number) => {
    setCurrShoppingList((prev) => {
      const newShoppingList = prev.filter((_, i) => i !== index);

      return newShoppingList;
    });
  };

  return (
    <div className="list-container">
      <div className="back-btn-wrapper">
        <Button text="Back" onClick={() => navigate(-1)} />
      </div>
      <div className="list-content">
        <h1>Shopping list</h1>

        <Button
          text="Add additional item"
          onClick={() => setIsPortalOpen(true)}
        />
        <Table
          currShoppingList={currShoppingList}
          handleReorder={handleReorder}
          openEditForm={openEditForm}
          handleDelete={handleDelete}
        />
        {isPortalOpen && (
          <Portal
            onClose={() => handleClosePortal()}
            onSubmit={editIndex !== null ? handleEdit : handleSubmit}
            itemToEdit={itemToEdit}
          />
        )}
      </div>
    </div>
  );
};

export default List;
