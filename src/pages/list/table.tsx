import { Button } from "src/components";
import { TableInterface } from "src/types/pages/list";

const Table = ({
  currShoppingList,
  handleReorder,
  openEditForm,
  handleDelete,
}: TableInterface) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Change order</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {currShoppingList.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price.toFixed(2)}</td>
            <td>{(item.quantity * item.price).toFixed(2)}</td>
            <td>
              <div className="button-layout">
                <Button text="Up" onClick={() => handleReorder(i, true)} />
                <Button text="Down" onClick={() => handleReorder(i)} />
              </div>
            </td>
            <td>
              <Button text="Edit" onClick={() => openEditForm(item, i)} />
            </td>
            <td>
              <Button text="Delete" onClick={() => handleDelete(i)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
