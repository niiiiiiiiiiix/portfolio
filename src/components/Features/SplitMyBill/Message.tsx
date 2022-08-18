import React from "react";

interface Message {
  value: string,
  handleSubmit: React.FormEventHandler<HTMLFormElement>, 
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Message({value, handleSubmit, handleChange}: Message) {
  return (
    <div className="message-container">
        {"Message"}
        <form onSubmit={handleSubmit}>
            <input 
              value={value}
              onChange={handleChange}
              type="text"
              placeholder="Enter a message"
              className="message"
            />
            <button
              type="submit"
              className="btn"
            >
              Submit
            </button>
        </form>
      </div>
  );
}
