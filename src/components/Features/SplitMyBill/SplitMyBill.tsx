import React, { ChangeEvent, useState, FormEvent } from "react";
import InputValue from "./GetValue";
import Greet from "./SimpleGreeter";
import { properties } from "../../../StaticValues/properties";
import BaseCalculator from "./Calculator/BaseCalculator";
import AddParty from "./AddParty";
import AddItem from "./AddItem";
import PersonPayableMap from "./PersonPayableMap";

const SplitMyBill = () => {
  const gstMultiplier = 1.07;
  const serviceTaxMultiplier = 1.10;
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

  const valueAfterTax = (value: number) => {
    return value * serviceTaxMultiplier * gstMultiplier
  }

  // AddParty component
  const [ partyName, setPartyName ] = useState<string>("");
  const [ amountPayable, setAmountPayable ] = useState<number>(0);
  const [ partyPayableMap, setPartyPayableMap ] = useState<{[key: string]: number}>({});
  const addPartyInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPartyName(e.target.value);
  }
  const addPartySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    partyPayableMap[partyName] = amountPayable;
    setPartyPayableMap(partyPayableMap);
    setPartyName("");
    console.log(partyPayableMap);
  }

  // AddItem component
  const [ itemName, setItemName ] = useState<string>("");
  const [ itemCost, setItemCost ] = useState<string>("");
  const [ splitDecision, setSplitDecision ] = useState<boolean>(false);
  const [ itemNameCostMap, setItemNameCostMap ] = useState<{[key: string]: number}>({});
  const addItemNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  }
  const addItemCostInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemCost(e.target.value);
  }
  const addItemSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    itemNameCostMap[itemName] = Number(itemCost);
    setItemNameCostMap(itemNameCostMap);
    setItemName("");
    setItemCost("");
    console.log(itemNameCostMap)
  }

  return (
    <div className="split-bill">
      <Greet name="random"/>
      <BaseCalculator totalCost={totalCost} totalCount={participantCount}/>
      <AddParty partyName={partyName} addPartySubmit={addPartySubmit} addPartyInput={addPartyInput}/>
      <PersonPayableMap partyPayableMap={partyPayableMap}/>
      <AddItem itemName={itemName} itemCost={itemCost} addItemSubmit={addItemSubmit} addItemNameInput={addItemNameInput} addItemCostInput={addItemCostInput}/>
    </div>
  );
};

export default SplitMyBill