import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy, deleteBot }) {
  const classesEnlisted = army.reduce((classes, bot) => {
    if (!classes.includes(bot.bot_class)) {
      classes.push(bot.bot_class);
    }
    return classes;
  }, []);

  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div className="card-container">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={removeFromArmy}
            buttonText="Remove"
            extraButton={<button onClick={() => deleteBot(bot)}>Delete</button>}
          />
        ))}
      </div>
      <p>Classes enlisted: {classesEnlisted.join(", ")}</p>
    </div>
  );
}

export default YourBotArmy;