import React, { ChangeEvent, useState, FormEvent, MouseEvent } from "react";
import InputValue from "./GetValue";
import { properties } from "../../../StaticValues/properties";
import BaseCalculator from "./Calculator/BaseCalculator";
import AddParty from "./AddParty";
import AddItem from "./AddItem";
import PartyPayableMap from "./PartyPayableMap";
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
    if (partyName.length == 0) {
      alert("Invalid name")
    } else if (partyPayableMap[partyName] == null) {
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
  const [ sharedBy, setSharedBy ] = useState<[]>([])
  const [ splitDecision, setSplitDecision ] = useState<boolean>(false);
  // const [ itemMap, setItemMap ] = useState<{[key: string]: {cost: number, sharedBy: Set<string>}}>({});
  const [ itemMap, setItemMap ] = useState<{[key: string]: {cost: number, sharedBy: []}}>({});
  const addItemNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  }
  const addItemCostInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemCost(e.target.value);
  }
  const addItemSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemName.length == 0) {
      alert("Invalid Item Name");
    } else if (itemCost.length == 0) {
      alert("Invalid Item Cost");
    } else if (itemMap[itemName] == null) {
      setItemMap({...itemMap, [itemName]: {
        cost: parseInt(itemCost),
        sharedBy: []
      }})
    } else {
      alert("Check item for duplicate")
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
      <BaseCalculator totalCost={totalCost} totalCount={participantCount}/>
      <AddParty partyName={partyName} addPartySubmit={addPartySubmit} addPartyInput={addPartyInput}/>
      <AddItem itemName={itemName} itemCost={itemCost} addItemSubmit={addItemSubmit} addItemNameInput={addItemNameInput} addItemCostInput={addItemCostInput} partyPayableMap={partyPayableMap}/>
      <ItemMap itemMap={itemMap} deleteItem={deleteItem}/>
      <PartyPayableMap partyPayableMap={partyPayableMap} deleteParty={deleteParty}/>
    </div>
  );
};

export default SplitMyBill