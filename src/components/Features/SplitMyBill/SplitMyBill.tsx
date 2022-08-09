import React, { ChangeEvent, useState } from "react";
import GetValue from "./GetValue";
import Greet from "./SimpleGreeter";
const SplitMyBill = () => {
  return (
    <div className="SplitMyBill">
      <Greet name="random"/>
      <GetValue stringValue="something"/>
    </div>
  );
};

export default SplitMyBill;