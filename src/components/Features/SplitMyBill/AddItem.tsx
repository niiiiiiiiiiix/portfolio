import React, { useState } from "react";

interface AddItem {
  itemName: string
  itemCost: string
  addItemNameInput: React.ChangeEventHandler<HTMLInputElement>
  addItemCostInput: React.ChangeEventHandler<HTMLInputElement>
  addItemSubmit: React.FormEventHandler<HTMLFormElement>
  partyPayableMap: object
}

export default function AddItem({itemName, itemCost, addItemSubmit, addItemNameInput, addItemCostInput, partyPayableMap}: AddItem) {
  const [checked, setChecked] = useState(false);
  const updateThis = (e: any) => {
    setChecked(!checked)
    console.log(checked)
    console.log(e.target.name)
    console.log(e.target)
    console.log(e)
  }
  return (
    <div>
        <form onSubmit={addItemSubmit} className="add-item-form">
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
            className="button"
            >
            Add item
          </button>
          {
            Object.entries(partyPayableMap).map(([key, value]) => {
              return (
                <div key={key}>
                  <div>
                      {key}
                      <input type="checkbox" name={key} onClick={updateThis} className="checkbox" defaultChecked={checked} checked={checked}/>
                  </div>
              </div>
              )
            })
          }
        </form>
      </div>
  );
}
