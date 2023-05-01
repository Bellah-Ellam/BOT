import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  return (
    <div className="App">
      <BotCollection addToArmy={addToArmy} />
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
    </div>
  );
}

export default App;
