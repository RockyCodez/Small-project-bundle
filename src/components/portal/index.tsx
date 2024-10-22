import { createPortal } from "react-dom";

import Form from "./form";
import { IPortal } from "../../types/components";
import Button from "../button";

import "../../styles/components/portal.css";

const Portal = ({ onClose, onSubmit, itemToEdit }: IPortal) => {
  return createPortal(
    <div className="portal">
      <div className="portal-content">
        <div className="close-btn-wrapper">
          <Button text="X" onClick={onClose} />
        </div>
        <h1 className="portal-title">
          {itemToEdit ? "Edit an item" : "Add an item"}
        </h1>
        <Form submitData={onSubmit} itemToEdit={itemToEdit} />
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Portal;
