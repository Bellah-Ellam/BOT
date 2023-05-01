import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy, deleteBot }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div className="card-container">
        {army.map((bot) => (
          // <div className="army-card" key={bot.id}>
          //   {/* <img src={bot.avatar_url} onClick={() => removeFromArmy(bot)} />
          //   <p>Health: {bot.health}</p>
          //   <p>Damage: {bot.damage}</p>
          //   <p>Armor: {bot.armor}</p>
          //   <p>Class: {bot.bot_class}</p>
          //   <p>Catchphrase: {bot.catchphrase}</p>
          //   <button className="delete-button" onClick={() => deleteBot(bot)}>
          //     X
          //   </button> */}
           
          // </div>
           <BotCard className="army-card"
           bot={bot}
           onEnlist={removeFromArmy}
           removeFromArmy={removeFromArmy}
           deleteBot={deleteBot}
         />

        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;