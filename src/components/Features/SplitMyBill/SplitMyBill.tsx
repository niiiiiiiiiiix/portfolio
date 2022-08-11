import React, { ChangeEvent, useEffect, useState } from "react";
import InputValue from "./GetValue";
import Greet from "./SimpleGreeter";
import { properties } from "../../../StaticValues/properties";

const SplitMyBill = () => {
  const [ participantCount, setParticipantCount ] = useState<string>("");
  const [ totalCost, setTotalCost ] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, type: string) => {
    const input = event.target.value;  
    if (type == properties.participantCount) {
      setParticipantCount(input)
    }
    else if (type == properties.totalCost) {
      setTotalCost(input)
    }
  }
  
  const calculate = () => {
    const finalCost: number = parseFloat(totalCost)
    const finalCount: number = parseFloat(participantCount)
    const costPerPax: number = finalCost / finalCount
    if (finalCount == 0) {
      return <div>Check value</div>
    }
    if (!isNaN(costPerPax)) {
      return <div>{costPerPax}</div>
    } else {
      return <div>Check value</div>
    }
  }

  return (
    <div className="split-bill">
      <Greet name="random"/>
      {/* <GetValue stringValue="something"/> */}
      <div className="count-participants">
        {properties.numOfParticipants}
          <input 
          type="text"
          value={participantCount}
          onChange={(e) => handleInputChange(e, properties.participantCount)}
          required
          />
      </div>
      <div className="total-costs">
        {properties.totalCost2}
          <input 
          type="text"
          value={totalCost}
          onChange={(e) => handleInputChange(e, properties.totalCost)}
          required
          />
      </div>
      <div>
        {(calculate())}
      </div>
    </div>
  );
};

export default SplitMyBill;