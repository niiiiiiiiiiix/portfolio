import React from "react";

interface ItemMap {
  itemMap: {[key: string]: {cost: number, sharedBy: {}}}
  deleteItem: React.MouseEventHandler<HTMLButtonElement>
}

export default function ItemMap({itemMap, deleteItem}: ItemMap) {
  return (
    <div>
        <div>
          {
            Object.entries(itemMap).map(([key, value]) => {
              return (
                <div key={key}>
                  <div>
                  {key}: {value.cost}
                  </div>
                  <button onClick={deleteItem} value={key}>
                    delete
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
  );
}
