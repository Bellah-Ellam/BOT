import React from "react";

function BotSpecs({ bot, onBack, onEnlist }) {
  const { id, name, avatar_url, health, damage, armor, bot_class, catchphrase } = bot;

  return (
    <div className="bot-specs">
      <div className="bot-card">
        <img src={avatar_url} alt={name} className="bot-avatar" />
        <h3 className="bot-name">{name}</h3>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Back to List</button>
        <button onClick={() => onEnlist(bot)} disabled={bot.enlisted}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;