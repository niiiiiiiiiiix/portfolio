import React, { ChangeEvent, useState } from "react";

interface Value {
  stringValue: string;
}

export default function GetValue({ stringValue }: Value) {
  const [ value , setValue] = useState<number>();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if(typeof input == "number") {
      setValue(input);
      console.log(input);
    }
    else {
      console.log("not a number");
    }
  }

  return (
    <div className="set-number">
      <div>
        <label>
          costs: 
          <br/>
        </label>
        <input 
        type="text" 
        placeholder={stringValue}
        value={value}
        onChange={handleInputChange}
        required
        />
      </div>
    </div>
  );
};

// export default GetValue;