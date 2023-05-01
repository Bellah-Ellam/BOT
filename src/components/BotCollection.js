import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ army, setArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <div className="bot-collection">
      <h2>Bots Collection</h2>
      <div className="card-container horizontal">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => addBotToArmy(bot)}
            buttonText="Enlist"
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;