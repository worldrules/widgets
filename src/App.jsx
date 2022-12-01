import { React, useState } from "react";
import { Accordion } from "./components/Accordion";

const items = [
  { title: "What is React ?" },
  { content: "React is frontend javascript framework" },
];

function App() {
  return (
    <div>
      <Accordion></Accordion>
    </div>
  );
}

export default App;
