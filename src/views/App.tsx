import React from "react"

import { Private } from "./Private"
import { Public } from "./Public"

const App = () => {
  const auth: boolean = false;

  return (
    <div className="App">
      { auth? <Private /> : <Public /> } 
    </div>
  );
}

export default App;