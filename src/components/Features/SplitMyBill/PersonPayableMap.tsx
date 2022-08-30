import React from "react";

interface PartyPayable {
  partyPayableMap: {[key: string]: {payable: number, isChecked: boolean}}
  deleteParty: React.MouseEventHandler<HTMLButtonElement>
}

export default function AddParty({partyPayableMap, deleteParty}: PartyPayable) {
  return (
    <div>
        <div>
          {
            Object.entries(partyPayableMap).map(([key, value]) => {
              return (
                <div key={key}>
                  <div>
                  {key}: {value.payable}
                  </div>
                  <button onClick={deleteParty} value={key}>
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
