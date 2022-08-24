import React, { ChangeEvent, useState, FormEvent } from "react";
import InputValue from "./GetValue";
import Greet from "./SimpleGreeter";
import Message from "./Message";
import { properties } from "../../../StaticValues/properties";
import BaseCalculator from "./Calculator/BaseCalculator";
import AddParty from "./AddParty";
import PersonPayableMap from "./PersonPayableMap";

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

  // for sending a message
  const [ message, setMessage ] = useState<string>("");
  const [ submittedMessage, setSubmittedMessage ] = useState<string | null>(null)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedMessage(message);
    console.log(message)
    setMessage("")
  }

  // to display final cost per person
  const [ personName, setPersonName ] = useState<string>("");
  const [ amountPayable, setAmountPayable ] = useState<number>(0);
  const [ personCostMap, setPersonCostMap ] = useState<{[key: string]: number}>({});
  const handlePersonNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value);
  }
  const addPersonToParty = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    personCostMap[personName] = amountPayable
    setPersonCostMap(personCostMap)
    setPersonName("")
  }

  return (
    <div className="split-bill">
      <Greet name="random"/>
      <BaseCalculator totalCost={totalCost} totalCount={participantCount}/>
      <Message value={message} handleSubmit={handleSubmit} handleChange={handleChange} submittedMessage={submittedMessage}/>
      <AddParty name={personName} addPersonToParty={addPersonToParty} handlePersonNameChange={handlePersonNameChange}/>
      <PersonPayableMap personCostMap={personCostMap}/>
    </div>
  );
};

export default SplitMyBill