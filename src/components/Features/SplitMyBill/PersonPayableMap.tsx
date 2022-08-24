import React from "react";

interface PartyPayable {
  partyPayableMap: object
}

export default function AddParty({partyPayableMap}: PartyPayable) {
  return (
    <div>
        <div>
          {
            Object.entries(partyPayableMap).map(([key, value], index) => {
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
