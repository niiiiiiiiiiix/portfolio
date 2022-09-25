import React from "react";
import "./PartyPayableMap.css"

interface PartyPayableMap {
  partyPayableMap: {[key: string]: {payable: number, isChecked: boolean}}
  deleteParty: React.MouseEventHandler<HTMLButtonElement>
}

export default function PartyPayableMap({partyPayableMap, deleteParty}: PartyPayableMap) {
  return (
    <div>
      {
        Object.entries(partyPayableMap).map(([key, value]) => {
          return (
            <div key={key} className="party-payable-map">
              <div className="key-value-pair">
                <div>
                  {key}
                </div>
                <div>
                  {value.payable}
                </div>
              </div>
              <button onClick={deleteParty} value={key} className="button">
                delete
              </button>
            </div>
          )
        })
      }
    </div>
  );
}
