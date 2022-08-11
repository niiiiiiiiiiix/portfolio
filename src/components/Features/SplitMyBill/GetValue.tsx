import React, { ChangeEvent, useState } from "react";

interface Value {
  label: string;
  count?: number;
}

export default function InputValue({ label, count }: Value) {
  const onlyNumberRegex = new RegExp("^[0-9]*$");
  const [ value , setValue] = useState<number>(0);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if(onlyNumberRegex.test(input) === true) {
      setValue(parseFloat(input));
    }
  }

  return (
    <div className="set-number">
      <div>
        {label}
      </div>
      <input 
      type="text"
      value={value || ""}
      onChange={handleInputChange}
      required
      />
    </div>
  );
};

// export default GetValue;