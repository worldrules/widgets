import { React, useState } from "react";
import { Accordion } from "./components/Accordion";

const items = [
  {
    title: "What is React ?",
    content: "React is frontend javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React ?",
    content: "You use React by creating components",
  },
];

function App() {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
}

export default App;
