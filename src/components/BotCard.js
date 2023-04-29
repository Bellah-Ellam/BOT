import React from 'react';

const BotCard = ({ bot, onEnlist, onRelease, onDelete }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card">
      <div className="bot-card-header">
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
      <div className="bot-card-actions">
        {onEnlist && <button onClick={() => onEnlist(id)}>Enlist</button>}
        {onRelease && <button onClick={() => onRelease(id)}>Release</button>}
        {onDelete && <button className="delete-button" onClick={() => onDelete(id)}>x</button>}
      </div>
    </div>
  );
}

export default BotCard;