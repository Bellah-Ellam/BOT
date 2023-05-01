import React from "react";

function SortBar({ sortType, onSort }) {
  return (
    <div className="sort-bar">
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={sortType} onChange={(e) => onSort(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;