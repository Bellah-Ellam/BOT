import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card">
      <div className="bot-card-header" onClick={() => onEnlist(bot)}>
        <img src={avatar_url} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="bot-card-details">
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>
      </div>
      
    </div>
  );
}

export default BotCard;