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
    //   body: JSON.stringify(bot),
    // }).then(() => {
    //   removeFromArmy(bot);
    // });
    }
    );
  };
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div className="card-container">
        {army.map((bot) => (
          <div className="army-card" key={bot.id}>
          <img src={bot.avatar_url} onClick = {() => releaseBot(bot)}/>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>


          </div>
      
          // <BotCard
          //   key={bot.id}
          //   bot={bot}
          //   onClick={() => releaseBot(bot)}
          //   buttonText="Release"
          //   deleteBot={() => deleteBot(bot)}
          // />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;