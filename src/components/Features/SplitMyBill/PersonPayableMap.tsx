import React from "react";

interface PersonPayableMap {
  personCostMap: object
}

export default function AddParty({personCostMap}: PersonPayableMap) {
  return (
    <div>
        <div>
          {
            Object.entries(personCostMap).map(([key, value], index) => {
              return (
                <div key={index}>
                  <div>
                    {key}: {value}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  );
}
