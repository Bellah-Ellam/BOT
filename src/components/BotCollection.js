import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ addToArmy, army }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      addToArmy(bot);
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
            onEnlist={() => enlistBot(bot)}
            buttonText="Enlist"
            disabled={army.find((b) => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;