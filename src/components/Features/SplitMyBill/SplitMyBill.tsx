import React, { ChangeEvent, useEffect, useState } from "react";
import InputValue from "./GetValue";
import Greet from "./SimpleGreeter";
import Message from "./Message";
import { properties } from "../../../StaticValues/properties";
import BaseCalculator from "./Calculator/BaseCalculator";

const SplitMyBill = () => {
  const gstMultiplier = 1.07;
  const serviceTaxMultiplier = 1.10;
  const [ participantCount, setParticipantCount ] = useState<string>("");
  const [ totalCost, setTotalCost ] = useState<string>("");
  const [ items, setItems] = useState<{name: string, cost: string}[]>([]);
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, type: string) => {
    const input = event.target.value;  
    if (type == properties.participantCount) {
      setParticipantCount(input)
    }
    else if (type == properties.totalCost) {
      setTotalCost(input)
    }
  }

  const valueAfterTax = (value: number) => {
    return value * serviceTaxMultiplier * gstMultiplier
  }

  // const handleItemInputChange = (e:ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   console.log(name)
  //   console.log(value)
  //   setItems({
  //     ...items,
  //     [name]: value
  //   })
  //   console.log(items)
  // }

  // const [ messageList, setMessageList ] = useState<{item: string}[]>([]);
  const [ message, setMessage ] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <div className="split-bill">
      <Greet name="random"/>
      {/* <GetValue stringValue="something"/> */}
      {/* <div className="count-participants">
        {properties.numOfParticipants}
          <input 
          type="text"
          value={participantCount}
          onChange={(e) => {
            console.log(participantCount)
            handleInputChange(e, properties.participantCount)
          }}
          required
          />
      </div> */}
      {/* <div className="total-costs">
        {properties.totalCost2}
          <input 
          type="text"
          value={totalCost}
          onChange={(e) => handleInputChange(e, properties.totalCost)}
          required
          />
      </div> */}
      {/* <div>
        {(calculate())}
      </div> */}
      <BaseCalculator totalCost={totalCost} totalCount={participantCount}/>
      <Message value={message} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  );
};

export default SplitMyBill