import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotCollection({ addToArmy, army }) {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [sortKey, setSortKey] = useState(null);

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

  const onSort = (key) => {
    setSortKey(key);
  };

  const onFilter = (filter) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };
  if (selectedBot) {
    return <BotSpecs bot={selectedBot} onEnlist={enlistBot} />;
  }

  const filteredBots = bots.filter((bot) => {
    if (filters.length === 0) {
      return true;
    } else {
      return filters.includes(bot.bot_class);
    }
  });

  const sortedBots = sortKey
    ? [...filteredBots].sort((a, b) => b[sortKey] - a[sortKey])
    : filteredBots;

  return (
    <div className="bot-collection">
      <h2>Bots Collection</h2>
      <SortBar onSort={onSort} />
      <div className="card-container horizontal">
        {selectedBot ? (
          <BotSpecs
            bot={selectedBot}
            buttonText="Enlist"
            onButtonClick={() => {
              enlistBot(selectedBot);
              setSelectedBot(null);
            }}
            onBackClick={() => setSelectedBot(null)}
          />
        ) : (
          sortedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onEnlist={() => enlistBot(bot)}
              onDetails={() => setSelectedBot(bot)}
              buttonText="Enlist"
              disabled={army.find((b) => b.id === bot.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default BotCollection;