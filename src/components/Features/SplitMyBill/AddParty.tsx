import React from "react";

interface AddParty {
  name: string
  addPersonToParty: React.FormEventHandler<HTMLFormElement>
  handlePersonNameChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function AddParty({name, addPersonToParty, handlePersonNameChange}: AddParty) {
  return (
    <div>
        <form onSubmit={addPersonToParty}>
          <input 
            value={name}
            onChange={handlePersonNameChange}
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
