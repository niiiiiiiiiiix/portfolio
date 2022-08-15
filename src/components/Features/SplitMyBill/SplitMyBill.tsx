import React, { ChangeEvent, useEffect, useState } from "react";
import InputValue from "./GetValue";
import Greet from "./SimpleGreeter";
import { properties } from "../../../StaticValues/properties";

const SplitMyBill = () => {
  const gstMultiplier = 1.07;
  const serviceTaxMultiplier = 1.10;
  const [ participantCount, setParticipantCount ] = useState<string>("");
  const [ totalCost, setTotalCost ] = useState<string>("");
  const [ individualItem, setIndividualItem] = useState<{itemName: string, itemCost: number, splitBy: number}[]>([]);
  const [ participant, setParticipant] = useState<string[]>([]);
  
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

  const valueAfterTax = (value: number) => {
    return value * serviceTaxMultiplier * gstMultiplier
  }

  const AddParticipant = () => {
    return (
      <div>
        <label htmlFor="">Name</label>
        <input 
          type="text"
          required
        />
        <button onClick={() => setParticipant(prevItems => [...prevItems, "Bob"])}>
          Add Participant
        </button>
        {participant.map((element, index) => {
          return (
            <div key={index}>
              {element}
            </div>
          );
        })}
      </div>
    )
  }

  const AddItem = () => {
    return (
      <div>
        <label htmlFor="">Item Name</label>
        <input 
          type="text"
          required
        />
        <label htmlFor="">Item Cost</label>
        <input 
          type="text"
          required
        />
        <label htmlFor="">Split By</label>
        <input 
          type="text"
          required
        />
        
        <button onClick={() => setIndividualItem(prevItems => [...prevItems, {itemName: 'Kimchi', itemCost: 20, splitBy: 3}])}>
          Add item
        </button>
        {individualItem.map((element, index) => {
          return (
            <div key={index}>
              {element.itemName}
              {element.itemCost}
              {element.splitBy}
            </div>
          );
        })}
      </div>
    )
  }

  return (
    <div className="split-bill">
      <Greet name="random"/>
      <AddParticipant />
      <AddItem />
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

export default SplitMyBill