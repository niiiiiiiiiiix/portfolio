import React, { ChangeEvent, useState, FormEvent, MouseEvent } from "react";
import InputValue from "./GetValue";
import Greet from "./SimpleGreeter";
import { properties } from "../../../StaticValues/properties";
import BaseCalculator from "./Calculator/BaseCalculator";
import AddParty from "./AddParty";
import AddItem from "./AddItem";
import PersonPayableMap from "./PartyPayableMap";
import ItemMap from "./ItemMap";

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
  const [ partyPayableMap, setPartyPayableMap ] = useState<{[key: string]: {payable: number, isChecked: boolean}}>({});
  const addPartyInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPartyName(e.target.value);
  }
  const addPartySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (partyPayableMap[partyName] == null) {
      setPartyPayableMap({...partyPayableMap, [partyName]: {
        payable: 0,
        isChecked: false
      }});
    } else {
      alert("Check name for duplicate")
    }
    setPartyName("");
  }
  const deleteParty = (e: MouseEvent<HTMLButtonElement>) => {
    let currentPartyPayableMap = {...partyPayableMap};
    delete currentPartyPayableMap[e.currentTarget.value];
    setPartyPayableMap(currentPartyPayableMap);
  }

  // AddItem component
  const [ itemName, setItemName ] = useState<string>("");
  const [ itemCost, setItemCost ] = useState<string>("");
  const [ splitDecision, setSplitDecision ] = useState<boolean>(false);
  // const [ itemMap, setItemMap ] = useState<{[key: string]: {cost: number, sharedBy: Set<string>}}>({});
  const [ itemMap, setItemMap ] = useState<{[key: string]: {cost: number, isShared: boolean}}>({});
  const addItemNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  }
  const addItemCostInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemCost(e.target.value);
  }
  const addItemSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemMap[itemName] == null) {
      setItemMap({...itemMap, [itemName]: {
        cost: parseInt(itemCost),
        isShared: false
      }})
    }
    setItemName("");
    setItemCost("");
  }
  const deleteItem = (e: MouseEvent<HTMLButtonElement>) => {
    let currentItemMap = {...itemMap};
    delete currentItemMap[e.currentTarget.value];
    setItemMap(currentItemMap);
  }

  return (
    <div className="split-bill">
      <Greet name="random"/>
      <BaseCalculator totalCost={totalCost} totalCount={participantCount}/>
      <AddParty partyName={partyName} addPartySubmit={addPartySubmit} addPartyInput={addPartyInput}/>
      <PersonPayableMap partyPayableMap={partyPayableMap} deleteParty={deleteParty}/>
      <AddItem itemName={itemName} itemCost={itemCost} addItemSubmit={addItemSubmit} addItemNameInput={addItemNameInput} addItemCostInput={addItemCostInput}/>
      <ItemMap itemMap={itemMap} deleteItem={deleteItem}/>
    </div>
  );
};

export default SplitMyBill