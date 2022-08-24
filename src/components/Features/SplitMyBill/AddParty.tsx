import React from "react";

interface AddParty {
  partyName: string
  addPartySubmit: React.FormEventHandler<HTMLFormElement>
  addPartyInput: React.ChangeEventHandler<HTMLInputElement>
}

export default function AddParty({partyName, addPartySubmit, addPartyInput}: AddParty) {
  return (
    <div>
        <form onSubmit={addPartySubmit}>
          <input 
            value={partyName}
            onChange={addPartyInput}
            type="text"
            placeholder="Enter a name"
            className="person-name"
            />
          <button
            type="submit"
            className="btn"
            >
            Add person
          </button>
        </form>
      </div>
  );
}
