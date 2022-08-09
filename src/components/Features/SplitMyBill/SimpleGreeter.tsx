import React, { ChangeEvent, useState } from "react";

interface Person {
  name: string;
}

export default function Greet({ name }: Person) {
  return (
    <h1>
      Hello, {name}
    </h1>
  );
}
