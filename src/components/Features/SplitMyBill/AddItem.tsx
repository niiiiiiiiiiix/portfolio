import React from "react";

interface AddParty {
  itemName: string
  itemCost: string
  addItemSubmit: React.FormEventHandler<HTMLFormElement>
  addItemNameInput: React.ChangeEventHandler<HTMLInputElement>
  addItemCostInput: React.ChangeEventHandler<HTMLInputElement>
}

export default function AddParty({itemName, itemCost, addItemSubmit, addItemNameInput, addItemCostInput}: AddParty) {
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
