import React from 'react';

const BotCard = ({ bot, onEnlist, removeFromArmy, deleteBot }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  function deleteBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => removeFromArmy(bot))
      .catch((error) => console.error("Error deleting bot", error));
  }

  return (
    <div className="bot-card">
      <div className="bot-card-header" onClick={() => onEnlist(bot)}>
        <img src={avatar_url} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="bot-card-details">
        {/* <p><i class="heartbeat icon"></i> {health}</p>
        <p><i class="icon lightning"></i> {damage}</p>
        <p><i class="shield alternate icon"></i> {armor}</p> */}
        <p>Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>
      </div>
          <button onClick={() => {
              deleteBot(bot);
              window.location.reload();
          }}>Discharge</button>
          <span><i className="heartbeat icon"></i>{bot.health}</span>
          <span><i className="icon lightning"></i>{bot.damage}</span>
          <span><i className="shield alternate icon"></i>{bot.armor}</span>
      </div>
  );
};

export default BotCard;