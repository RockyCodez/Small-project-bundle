import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES, STORAGE } from "src/constants";
import { Button, Portal } from "src/components";
import { DataInterface, FormDataInterface } from "types/components";
import { shoppingList } from "src/data";

import Table from "./table";

import "../../styles/pages/list.css";

const List = () => {
  const navigate = useNavigate();

  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [currShoppingList, setCurrShoppingList] = useState<DataInterface[]>(
    () => {
      const savedList = localStorage.getItem(STORAGE.list);
      return savedList ? JSON.parse(savedList) : shoppingList;
    }
  );
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

  useEffect(() => {
    localStorage.setItem(STORAGE.list, JSON.stringify(currShoppingList));
  }, [currShoppingList]);

  const handleLocalStorageDelete = () => localStorage.clear();

  return (
    <div className="list-container">
      <div className="back-btn-wrapper">
        <Button text="Back" onClick={() => navigate(ROUTES.landing)} />
      </div>
      <div className="list-content">
        <h1>Shopping list</h1>
        <div className="list-buttons">
          <Button
            text="Add additional item"
            onClick={() => setIsPortalOpen(true)}
          />
          <Button
            text="Delete local storage"
            onClick={() => handleLocalStorageDelete()}
          />
        </div>
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
