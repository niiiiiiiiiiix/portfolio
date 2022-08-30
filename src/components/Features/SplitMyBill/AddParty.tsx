import React from "react";

interface AddParty {
  partyName: string
  addPartyInput: React.ChangeEventHandler<HTMLInputElement>
  addPartySubmit: React.FormEventHandler<HTMLFormElement>
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
