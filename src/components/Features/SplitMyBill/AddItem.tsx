import React from "react";

interface AddItem {
  itemName: string
  itemCost: string
  addItemNameInput: React.ChangeEventHandler<HTMLInputElement>
  addItemCostInput: React.ChangeEventHandler<HTMLInputElement>
  addItemSubmit: React.FormEventHandler<HTMLFormElement>
}

export default function AddItem({itemName, itemCost, addItemSubmit, addItemNameInput, addItemCostInput}: AddItem) {
  return (
    <div>
        <form onSubmit={addItemSubmit}>
          <input 
            value={itemName}
            onChange={addItemNameInput}
            type="text"
            placeholder="Item Name"
            className="item-name"
            />
          <input 
            value={itemCost}
            onChange={addItemCostInput}
            type="text"
            placeholder="Item Cost"
            className="item-cost"
            />
          <button
            type="submit"
            className="btn"
            >
            Add item
          </button>
        </form>
      </div>
  );
}
