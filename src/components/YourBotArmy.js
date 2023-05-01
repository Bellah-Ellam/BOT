import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy }) {
  const releaseBot = (bot) => {
    removeFromArmy(bot);
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bot),
    }).then(() => {
      removeFromArmy(bot);
    });
  };

  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div className="card-container">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRelease={() => releaseBot(bot)}
            buttonText="Release"
            deleteBot={() => deleteBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;