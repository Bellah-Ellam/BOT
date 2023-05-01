import React, { useState } from "react";
import BotCollection from "./components/BotCollection.js";
import YourBotArmy from "./components/YourBotArmy.js";
import "./index.css"

function App() {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  return (
    <div className="App">
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
      <BotCollection addToArmy={addToArmy} army={army} />
    </div>
  );
}

export default App;