import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army = [], setArmy }) {
  const releaseBot = (bot) => {
    const newArmy = army.filter((b) => b !== bot);
    setArmy(newArmy);
  };

  const enlistBot = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bot),
    }).then(() => {
      const newArmy = army.filter((b) => b !== bot);
      setArmy(newArmy);
    });
  };

  const allBots = BotCard.all || [];

  return (
    <div className="bot-collection">
      <h2>Your Bot Army</h2>
      <div className="card-container">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => releaseBot(bot)}
            buttonText="Release"
            deleteBot={() => deleteBot(bot)}
          />
        ))}
      </div>
      <hr />
      <h2>Bot Collection</h2>
      <div className="card-container horizontal">
        {allBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => enlistBot(bot)}
            buttonText="Enlist"
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;